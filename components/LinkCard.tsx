import type {ImageInfo, MqlResponseData} from '@microlink/mql'
import mql from '@microlink/mql'
import React from 'react'
import type {Fetcher} from 'swr'
import useSWR from 'swr'
import {twMerge} from 'tailwind-merge'

export interface LinkCardProps
  extends Omit<
    LinkCardViewProps,
    'title' | 'description' | 'image' | 'screenshot'
  > {
  url: string
}

export function LinkCard({url: href, ...restProps}: LinkCardProps) {
  const res = useSWR(href, linkMetadataFetcher)
  return (
    <LinkCardView
      url={href}
      title={res.data?.title}
      description={res.data?.description}
      image={res.data?.image}
      screenshot={res.data?.screenshot}
      {...restProps}
    />
  )
}

interface LinkCardViewProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title' | 'lang'> {
  url: string
  title?: string | null
  description?: string | null
  image?: ImageInfo | null
  screenshot?: ImageInfo | null
  size?: 'md' | 'sm'
  CardComponent?: React.ElementType<React.ComponentPropsWithoutRef<'div'>>
}

function LinkCardView({
  url,
  title,
  description,
  image,
  screenshot,
  size = 'md',
  CardComponent = 'div',
  ...restProps
}: LinkCardViewProps) {
  return (
    <CardComponent {...restProps}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline"
      >
        {image || screenshot ? (
          // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
          <img
            src={
              image && image?.width < 400
                ? screenshot?.url ?? image?.url
                : image?.url ?? screenshot?.url
            }
            className="my-0 h-48 w-full object-cover"
          />
        ) : (
          <div className="h-48 w-full bg-black/20" />
        )}
        <p
          className={twMerge(
            'px-4 underline',
            {
              md: 'text-xl',
              sm: 'text-base',
            }[size],
          )}
        >
          {title ?? url}
        </p>
        {description && (
          <p
            className={twMerge(
              'px-4',
              {
                md: 'text-base',
                sm: 'text-sm',
              }[size],
            )}
          >
            {description}
          </p>
        )}
      </a>
    </CardComponent>
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
