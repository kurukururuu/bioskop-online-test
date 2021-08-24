export default {
  title: 'Form',
}

export const Default = () => `
<div class="bg-blue-1 w-screen h-screen p-4">
  <BaseInput label="Title Input" class="w-48" />
  <BaseInput label="Title Input" class="w-48" placeholder="placeholder" />
  <BaseInput autocomplete="off" type="password" label="Password Input" class="w-48" placeholder="placeholder" />
</div>
`
