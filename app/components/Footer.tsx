import {ArchcodeLogo} from './ArchcodeLogo'
import {
  Box,
  Container,
  Flex,
  Grid,
  Link,
  Separator,
  Text,
} from '@modulz/design-system'
import {Link as RemixLink} from 'remix'

export function Footer() {
  return (
    <Box as="footer" css={{py: '$9'}}>
      <Flex justify="center" css={{mb: '$9'}}>
        <Separator size="2" />
      </Flex>

      <Container size="3">
        <Grid
          css={{
            gridTemplateColumns: '1fr',
            gap: '$6',
            '& ul': {listStyle: 'none', margin: '0', padding: '0'},
            '@bp2': {
              gridTemplateColumns: '3fr 1fr 2fr',
              gap: '$8',
            },
          }}>
          <Box>
            <Text
              as="h6"
              size="3"
              css={{
                fontWeight: 500,
                textTransform: 'uppercase',
                lineHeight: '20px',
              }}>
              Контакты
            </Text>

            <ul>
              <Flex as="li" align="center" css={{mt: '$2'}}>
                <MailboxCircleIcon />
                <Text
                  as="p"
                  size="3"
                  css={{ml: '$2', lineHeight: '20px', color: '$slate11'}}>
                  arch4gen@gmail.com
                </Text>
              </Flex>
              <Flex as="li" align="center" css={{mt: '$2'}}>
                <PersonCircleIcon />
                <Text
                  as="p"
                  size="3"
                  css={{ml: '$2', lineHeight: '20px', color: '$slate11'}}>
                  Адиль Ажиев, сооснователь проекта, тел.: +7 747 690 78 57
                </Text>
              </Flex>
              <Flex as="li" align="center" css={{mt: '$2'}}>
                <PersonCircleIcon />
                <Text
                  as="p"
                  size="3"
                  css={{ml: '$2', lineHeight: '20px', color: '$slate11'}}>
                  Анель Молдахметова, координатор проекта, тел. : +7 707 121 04
                  83
                </Text>
              </Flex>
            </ul>
          </Box>

          <Box>
            <Text
              as="h6"
              size="3"
              css={{
                fontWeight: 500,
                textTransform: 'uppercase',
                lineHeight: '20px',
              }}>
              Наши соцсети
            </Text>

            <ul>
              <li>
                <Text as="p" size="3" css={{mt: '$3', lineHeight: '20px'}}>
                  <Link
                    href="https://www.facebook.com/ArchcodeAlmaty/"
                    variant="subtle">
                    Facebook
                  </Link>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{mt: '$3', lineHeight: '20px'}}>
                  <Link
                    href="https://www.instagram.com/archcode_almaty/"
                    variant="subtle">
                    Instagram
                  </Link>
                </Text>
              </li>
            </ul>
          </Box>

          <Flex
            css={{
              alignItems: 'center',
              '@bp2': {
                flexDirection: 'column',
                alignItems: 'start',
              },
            }}>
            <Box
              as={RemixLink}
              to="/"
              css={{
                flexShrink: 0,
                color: '$hiContrast',
                display: 'inline-flex',
                '&:focus': {
                  boxShadow: 'none',
                },
              }}>
              <span
                style={{
                  position: 'absolute',
                  width: 1,
                  height: 1,
                  padding: 0,
                  margin: -1,
                  overflow: 'hidden',
                  clip: 'rect(0, 0, 0, 0)',
                  whiteSpace: 'nowrap',
                  border: 0,
                }}>
                Главная страница
              </span>
              <ArchcodeLogo />
            </Box>

            <Box
              css={{
                ml: '$4',
                pr: '$8',
                '@bp2': {mt: '$5', ml: '0'},
              }}>
              <Text
                as="p"
                size="2"
                css={{lineHeight: '20px', color: '$slate11'}}>
                © 2021 Архкод Алматы
              </Text>
              <Text
                as="p"
                size="2"
                css={{lineHeight: '20px', color: '$slate11'}}>
                Все права защищены
              </Text>
              <Text
                as="p"
                size="2"
                css={{mt: '$3', lineHeight: '20px', color: '$slate11'}}>
                При использовании материалов сайта обязательна ссылка на
                источник
              </Text>
            </Box>
          </Flex>
        </Grid>
      </Container>
    </Box>
  )
}

function MailboxCircleIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM7.537 7.65762L3.787 5.64312C3.543 5.51162 3.312 5.00012 3.7605 5.00012H12.22C12.6685 5.00012 12.4375 5.51162 12.193 5.64312L8.443 7.65762C8.317 7.72512 8.154 7.75712 7.99 7.75712C7.826 7.75712 7.663 7.72512 7.537 7.65762ZM8.443 8.75812L12.3065 6.74462C12.5 6.64364 12.5 6.75975 12.5 6.85135V6.85412V10.5001C12.5 10.7101 12.217 11.0001 12 11.0001H4C3.783 11.0001 3.5 10.7101 3.5 10.5001V6.85362L3.5 6.85085C3.49998 6.75925 3.49996 6.64314 3.693 6.74412C3.902 6.85295 5.88016 7.88975 6.9167 8.43303C7.25645 8.6111 7.49504 8.73615 7.537 8.75812C7.707 8.84712 7.826 8.85762 7.99 8.85762C8.154 8.85762 8.273 8.84712 8.443 8.75812Z"
        fill="currentcolor"
      />
    </svg>
  )
}

function PersonCircleIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.3745 12.465C14.0926 11.6011 14.592 10.5769 14.8305 9.47912C15.069 8.38134 15.0396 7.24226 14.7448 6.15824C14.45 5.07422 13.8985 4.07714 13.1368 3.25137C12.3752 2.42559 11.4258 1.79541 10.3691 1.41412C9.31242 1.03284 8.17943 0.911669 7.06598 1.06087C5.95254 1.21007 4.89141 1.62525 3.97236 2.27128C3.05331 2.91732 2.30337 3.7752 1.786 4.77237C1.26862 5.76953 0.999019 6.87664 1 8.00003C1.00038 9.63312 1.57588 11.2139 2.6255 12.465L2.6155 12.4735C2.6505 12.5155 2.6905 12.5515 2.7265 12.593C2.7715 12.6445 2.82 12.693 2.8665 12.743C3.0065 12.895 3.1505 13.041 3.3015 13.178C3.3475 13.22 3.395 13.259 3.4415 13.299C3.6015 13.437 3.766 13.568 3.9365 13.69C3.9585 13.705 3.9785 13.7245 4.0005 13.74V13.734C5.17155 14.5581 6.56855 15.0004 8.0005 15.0004C9.43245 15.0004 10.8295 14.5581 12.0005 13.734V13.74C12.0225 13.7245 12.042 13.705 12.0645 13.69C12.2345 13.5675 12.3995 13.437 12.5595 13.299C12.606 13.259 12.6535 13.2195 12.6995 13.178C12.8505 13.0405 12.9945 12.895 13.1345 12.743C13.181 12.693 13.229 12.6445 13.2745 12.593C13.31 12.5515 13.3505 12.5155 13.3855 12.473L13.3745 12.465ZM8 4.00003C8.44501 4.00003 8.88003 4.13199 9.25004 4.37922C9.62005 4.62646 9.90843 4.97786 10.0787 5.38899C10.249 5.80013 10.2936 6.25253 10.2068 6.68898C10.12 7.12544 9.90566 7.52635 9.59099 7.84102C9.27633 8.15569 8.87541 8.36998 8.43896 8.4568C8.0025 8.54361 7.5501 8.49906 7.13897 8.32876C6.72783 8.15846 6.37643 7.87007 6.1292 7.50006C5.88196 7.13005 5.75 6.69504 5.75 6.25003C5.75 5.65329 5.98706 5.081 6.40901 4.65904C6.83097 4.23708 7.40327 4.00003 8 4.00003ZM4.0035 12.465C4.01218 11.8085 4.27898 11.1818 4.74618 10.7205C5.21339 10.2592 5.84343 10.0004 6.5 10H9.5C10.1566 10.0004 10.7866 10.2592 11.2538 10.7205C11.721 11.1818 11.9878 11.8085 11.9965 12.465C10.8999 13.4532 9.47613 14.0001 8 14.0001C6.52387 14.0001 5.10008 13.4532 4.0035 12.465Z"
        fill="currentcolor"
      />
    </svg>
  )
}
