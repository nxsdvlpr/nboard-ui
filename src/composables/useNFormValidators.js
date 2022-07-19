import * as validators from '@vuelidate/validators'

export default function useNFormValidators() {
  const custom = {}

  custom.itemsIsRequired = {
    $validator: (value) => value.length > 0,
    $message: 'Choose at least one item',
    $params: {
      type: 'itemsIsRequired',
    },
  }

  return { ...validators, ...custom }
}
