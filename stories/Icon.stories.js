import ArrowCircleRight from '~/assets/icons/ArrowCircleRight.svg?inline'
import ArrowRight from '~/assets/icons/ArrowRight.svg?inline'
import ClockIcon from '~/assets/icons/ClockBG.svg?inline'
import FacebookBlack from '~/assets/icons/FacebookBlack.svg?inline'
import FacebookIcon from '~/assets/icons/Facebook.svg?inline'
import GoogleIcon from '~/assets/icons/Google.svg?inline'
import InstagramBlack from '~/assets/icons/InstagramBlack.svg?inline'
import HomeIcon from '~/assets/icons/Home.svg?inline'
import NotificationIcon from '~/assets/icons/Bell.svg?inline'
import PathIcon from '~/assets/icons/Path.svg?inline'
import ProfileIcon from '~/assets/icons/User.svg?inline'
import SearchIcon from '~/assets/icons/MagnifyingGlass.svg?inline'
import TwitterBlack from '~/assets/icons/TwitterBlack.svg?inline'
import YoutubeBlack from '~/assets/icons/YoutubeBlack.svg?inline'
import GPlayButton from '~/assets/icons/GooglePlayButton.svg?inline'
import AppStoreButton from '~/assets/icons/AppStoreButton.svg?inline'

export default {
  title: 'Icon',
  argTypes: {
    // width: { 
    //   control: { type: 'range', min: 12, max: 36, step: 1 },
    // },
  },
}

export const Default = (args, { argTypes }) => ({
  components: {
    ArrowCircleRight,
    ArrowRight,
    ClockIcon,
    FacebookIcon,
    GoogleIcon,
    HomeIcon,
    NotificationIcon,
    PathIcon,
    SearchIcon,
    ProfileIcon,
  },
  template: `
    <div class="flex">
      <ArrowCircleRight fill="black" width="24" height="24" class="mr-4" />
      <ArrowRight fill="black" width="24" height="24" class="mr-4" />
      <ClockIcon width="24" height="24" class="mr-4" />
      <NotificationIcon width="24" height="24" fill="transparent" stroke="#9BC7FD" class="mr-4" />
      <FacebookIcon width="24" height="24" class="mr-4" />
      <GoogleIcon width="24" height="24" class="mr-4" />
      <HomeIcon width="24" height="24" class="mr-4" />
      <PathIcon fill="#9BC7FD" width="16" height="16" class="mr-4" />
      <ProfileIcon width="24" height="24" class="mr-4" />
      <SearchIcon fill="transparent" stroke="#9BC7FD" width="24" height="24" class="mr-4" />
    </div>
  `
})

export const FooterMedsoc = (args, { argTypes }) => ({
  components: {
    FacebookBlack,
    InstagramBlack,
    TwitterBlack,
    YoutubeBlack
  },
  template: `
    <div class="flex bg-blue-1 w-full h-full p-4">
      <InstagramBlack width="36" height="36" class="mr-4" />
      <FacebookBlack width="36" height="36" class="mr-4" />
      <TwitterBlack width="36" height="36" class="mr-4" />
      <YoutubeBlack width="36" height="36" class="mr-4" />
    </div>
  `
})

export const FooterApps = (args, { argTypes }) => ({
  components: {
    GPlayButton,
    AppStoreButton
  },
  template: `
    <div class="flex bg-blue-1 w-full h-full p-4">
      <GPlayButton class="mr-4" />
      <AppStoreButton class="mr-4" />
    </div>
  `
})