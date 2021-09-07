import PathIcon from '~/assets/icons/Path.svg?inline'
import GoogleIcon from '~/assets/icons/Google.svg?inline'
import FacebookIcon from '~/assets/icons/Facebook.svg?inline'
import SearchIcon from '~/assets/icons/MagnifyingGlass.svg?inline'

export default {
  title: 'Buttons',
  argTypes: {
    dark: {
      options: [true, false]
    },
    size: {
      options: ['small', 'default', 'long'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<BaseButton v-bind="$props">Button</BaseButton>',
})
 
export const Basic = Template.bind({})
Basic.args = {
  dark: false,
  size: 'default'
}

export const PreIcon = (args, { argTypes }) => ({
  components: { PathIcon },
  template: `
    <BaseButton v-bind="$props">
      <PathIcon slot="pre-icon" fill="#011228" width="16" height="16" class="mr-4" />Button
    </BaseButton>
  `
})

export const PreIconDark = (args, { argTypes }) => ({
  components: { PathIcon, GoogleIcon, FacebookIcon },
  template: `
    <div class="flex flex-wrap">
      <BaseButton dark v-bind="$props" class="mobile:w-fit-content mobile:px-2">
        <PathIcon slot="pre-icon" fill="#9BC7FD" width="16" height="16" class="mr-4" />Button
      </BaseButton>
      <BaseButton dark v-bind="$props" class="ml-2 mobile:w-fit-content mobile:px-2">
        <GoogleIcon slot="pre-icon" width="24" height="24" class="mr-4" />
        <span class="text-white">Google</span>
      </BaseButton>
      <BaseButton dark v-bind="$props" class="ml-2 mobile:w-fit-content mobile:px-2">
        <FacebookIcon slot="pre-icon" width="24" height="24" class="mr-4" />
        <span class="text-white">Facebook</span>
      </BaseButton>
    </div>
  `
})

export const PostIconDark = (args, { argTypes }) => ({
  components: { SearchIcon },
  props: Object.keys(argTypes),
  template: `
    <div class="flex">
      <BaseButton size="small" dark v-bind="$props">
        <SearchIcon slot="post-icon" stroke="#9BC7FD" width="16" height="16" class="ml-4" />Cari
      </BaseButton>
    </div>
  `
})