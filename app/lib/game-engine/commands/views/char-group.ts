import type {Paragraph, Text} from 'mdast'
import {fromMarkdown} from 'mdast-util-from-markdown'

export type CharGroup =
  | {
      type: 'text'
      chars: string[]
      startIndex: number
    }
  | {
      type: 'link'
      url: string
      chars: string[]
      startIndex: number
    }

export function charGroupsForMarkdown(value: string) {
  const tree = fromMarkdown(value)
  const paragraphs: Paragraph[] = []
  for (const child of tree.children) {
    if (child.type !== 'paragraph') {
      console.warn('Unsupported syntax', child)
      continue
    }
    paragraphs.push(child)
  }
  const groups: CharGroup[] = []
  let startIndex = 0
  for (const p of paragraphs) {
    if (groups.length > 0) {
      groups.push({type: 'text', chars: ['\n', '\n'], startIndex})
      startIndex += 1
    }
    for (const node of p.children) {
      switch (node.type) {
        case 'text': {
          const chars = node.value.split('')
          groups.push({
            type: 'text',
            chars,
            startIndex,
          })
          startIndex += chars.length
          break
        }
        case 'link': {
          const text = node.children.find((c): c is Text => c.type === 'text')
          if (!text) {
            console.warn('Unsupported syntax', node)
            break
          }

          const chars = text.value.split('')
          groups.push({
            type: 'link',
            url: node.url,
            chars,
            startIndex,
          })
          startIndex += chars.length
          break
        }
        default:
          console.warn('Unsupported syntax', node)
          break
      }
    }
  }
  return groups
}
