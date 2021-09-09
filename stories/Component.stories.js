export default {
  title: 'Component',
  argTypes: {
  }
}

export const BaseNavbar = (args, { argTypes }) => ({
  template: `
  <div>
    <div class="text-yellow-primary desktop:hidden">--Desktop only--</div>
    <BaseNavbar class="mobile:hidden" />
  </div>
`
})

export const FilmInfo = (args, { argTypes }) => ({
  template: `
  <div>
    <FilmInfo />
  </div>
`
})

export const DefaultCarousel = (args, { argTypes }) => ({
  template: `
    <div class="p-4">
      <VueCarousel />
    </div>
  `
})

export const BannerCarousel = (args, { argTypes }) => ({
  template: `
    <div class="p-4">
      <BannerCarousel />
    </div>
  `
})

export const MenuBar = (args, { argTypes }) => ({
  template: `
    <div style="height: 200vh;" class="border">
      <div class="text-yellow-primary mobile:hidden">--Mobile only--</div>
      <MobileMenuBar class="desktop:hidden" />
    </div>
  `
})

export const AccountLayoutMenu = (args, { argTypes }) => ({
  template: `
  <div class="flex desktop:items-center justify-center h-screen">
    <AccountLayoutMenu />
  </div>
`
})

export const AccountLayoutInfo = (args, { argTypes }) => ({
  template: `
  <div class="flex desktop:items-center justify-center h-screen">
    <AccountLayoutInfo />
  </div>
`
})

export const AccountLayoutHistory = (args, { argTypes }) => ({
  template: `
  <div class="flex desktop:items-center justify-center h-screen">
    <AccountLayoutHistory />
  </div>
`
})

export const LayoutPackage = (args, { argTypes }) => ({
  template: `
  <div>
    <LayoutPackage />
  </div>
`
})

export const BaseFooter = (args, { argTypes }) => ({
  template: `
  <div>
    <BaseFooter />
  </div>
`
})