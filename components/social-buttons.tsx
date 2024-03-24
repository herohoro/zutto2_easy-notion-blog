'use client'

import {
  FacebookIcon,
  FacebookShareButton,
  HatenaIcon,
  HatenaShareButton,
  PocketIcon,
  PocketShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share'

import styles from '../styles/social-buttons.module.css'

const SocialButtons = ({ title = '', url, id = null }) => (
  <ul className={styles.socialButtons}>
    <li>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
    </li>
    <li>
      <FacebookShareButton url={url}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
    </li>
    <li>
      <PocketShareButton url={url} title={title}>
        <PocketIcon size={32} round={true} />
      </PocketShareButton>
    </li>
    <li>
      <HatenaShareButton url={url} title={title}>
        <HatenaIcon size={32} round={true} />
      </HatenaShareButton>
    </li>
  </ul>
)

export default SocialButtons
