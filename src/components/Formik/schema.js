import * as yup from 'yup';

const FILE_SIZE = 1000000;

const initialValues = {
  firstname: '',
  lastname: '',
  gender: '',
  mobileno: '',
  country: '',
  city: '',
  document: '',
  twowayactive: '',
  returndate: '',
  returnfrom: '',
  returnto: '',
};

const validationSchema = yup.object().shape({
  firstname: yup.string().required('First Name is required'),
  lastname: yup.string().required('Last Name is required'),
  gender: yup.string().required('Gender is required'),
  mobileno: yup
    .number()
    .typeError('This field should be number')
    .required('Phone Number is required'),
  country: yup.string().required('Country Name is required'),
  city: yup.string().required('City Name is required'),
  document: yup
    .mixed()
    .required('Document is required')
    .test(
      'FILE_FORMAT',
      'Document should be in jpg, png or pdf format',
      (value) => {
        return value
          ? [
              'application/pdf',
              'image/jpg',
              'image/jpeg',
              'image/png',
            ].includes(value.type)
          : true;
      }
    )
    .test('FILE_SIZE', 'Document should be less than 1 MB', (value) => {
      return value ? value.size <= FILE_SIZE : true;
    }),
  twowayactive: yup.string().required('Yes or no is required'),
  returndate: yup.string().when('twowayactive', {
    is: (val) => (val === 'yes' ? true : false),
    then: yup.string().required('Return Date is required'),
    otherwise: yup.string().nullable(),
  }),
  returnfrom: yup.string().when('twowayactive', {
    is: (val) => (val === 'yes' ? true : false),
    then: yup.string().required('Return From is required'),
    otherwise: yup.string().nullable(),
  }),
  returnto: yup.string().when('twowayactive', {
    is: (val) => (val === 'yes' ? true : false),
    then: yup.string().required('Return To is required'),
    otherwise: yup.string().nullable(),
  }),
});

export { initialValues, validationSchema };
