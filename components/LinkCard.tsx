import type {ImageInfo, MqlResponseData} from '@microlink/mql'
import mql from '@microlink/mql'
import type {Fetcher} from 'swr'
import useSWR from 'swr'
import {twMerge} from 'tailwind-merge'
import type {CardProps} from '~/components'
import {Card} from '~/components'

export interface LinkCardProps extends Omit<CardProps, 'title' | 'lang'> {
  url: string
}

export function LinkCard({url: href, ...restProps}: LinkCardProps) {
  const res = useSWR(href, linkMetadataFetcher)
  return <LinkCardView {...res.data} url={href} {...restProps} />
}

interface LinkCardViewProps extends Omit<CardProps, 'title' | 'lang'> {
  url: string
  title?: string | null
  description?: string | null
  image?: ImageInfo | null
  screenshot?: ImageInfo | null
}

function LinkCardView({
  url,
  title,
  description,
  image,
  screenshot,
  contentClassName,
  ...restProps
}: LinkCardViewProps) {
  return (
    <Card
      contentClassName={twMerge('p-0 max-w-none', contentClassName)}
      {...restProps}>
      <a
        className="no-underline"
        href={url}
        target="_blank"
        rel="noopener noreferrer">
        {image || screenshot ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="my-0 h-48 w-full object-cover"
            src={
              image && image?.width < 400
                ? screenshot?.url ?? image?.url
                : image?.url ?? screenshot?.url
            }
          />
        ) : (
          <div className="h-48 w-full bg-black/20" />
        )}
        <p className="px-4 text-xl underline">{title ?? url}</p>
        {description && <p className="px-4">{description}</p>}
      </a>
    </Card>
  )
}

const linkMetadataFetcher: Fetcher<MqlResponseData, string> = async (href) => {
  const res = await mql(href, {
    screenshot: true,
  })
  if (res.status === 'fail') {
    throw new Error('Failed to get link metadata')
  }
  return res.data
}
