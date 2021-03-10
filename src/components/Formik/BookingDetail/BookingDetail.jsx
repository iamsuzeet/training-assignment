import React from 'react';
import { FormikValidationError } from 'components/Formik/FormikValidationError';
import { useFormik } from 'formik';
import * as schema from '../schema';

const BookingDetail = () => {
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
  } = useFormik({
    initialValues: schema.initialValues,
    validationSchema: schema.validationSchema,
    enableReinitialize: true,
    onSubmit: (values, { setSubmitting }) => {
      const reqData = { ...values };
      if (values.twowayactive === 'no') {
        reqData.returndate = '';
        reqData.returnfrom = '';
        reqData.returnto = '';
      }
      setTimeout(() => {
        alert(JSON.stringify(reqData, null, 2));
        setSubmitting(false);
      }, 500);
    },
  });

  return (
    <div>
      <div className='py-5 text-center'>
        <h2>Add Booking Details</h2>
      </div>

      <div className='row g-3'>
        <div className='col'>
          <form onSubmit={handleSubmit}>
            <div className='row g-3'>
              <div className='col-12 mb-2'>
                <div className='row'>
                  <div className='col-lg-3 mb-3'>
                    <label htmlFor='firstname' className='form-label'>
                      First Name
                    </label>
                    <input
                      type='text'
                      id='firstname'
                      name='firstname'
                      className='form-control'
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <FormikValidationError
                      name='firstname'
                      touched={touched}
                      errors={errors}
                    />
                  </div>

                  <div className='col-lg-3 mb-3'>
                    <label htmlFor='lastname' className='form-label'>
                      Last Name
                    </label>
                    <input
                      type='text'
                      id='lastname'
                      name='lastname'
                      className='form-control'
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <FormikValidationError
                      name='lastname'
                      touched={touched}
                      errors={errors}
                    />
                  </div>

                  <div className='col-lg-3 mb-3'>
                    <label htmlFor='gender' className='form-label'>
                      Gender
                    </label>
                    <select
                      name='gender'
                      id='gender'
                      onChange={handleChange}
                      value={values.gender}
                      onBlur={handleBlur}
                      className='form-control'
                    >
                      <option value=''>Select Gender</option>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                      <option value='others'>Others</option>
                    </select>

                    <FormikValidationError
                      name='gender'
                      touched={touched}
                      errors={errors}
                    />
                  </div>

                  <div className='col-lg-3 mb-3'>
                    <label htmlFor='mobileno' className='form-label'>
                      Mobile No.
                    </label>
                    <input
                      type='text'
                      id='mobileno'
                      name='mobileno'
                      className='form-control'
                      value={values.mobileno}
                      onChange={handleChange}
                    />
                    <FormikValidationError
                      name='mobileno'
                      touched={touched}
                      errors={errors}
                    />
                  </div>

                  <div className='col-lg-3 mb-3'>
                    <label htmlFor='country' className='form-label'>
                      Country
                    </label>
                    <input
                      type='text'
                      id='country'
                      name='country'
                      className='form-control'
                      value={values.country}
                      onChange={handleChange}
                    />
                    <FormikValidationError
                      name='country'
                      touched={touched}
                      errors={errors}
                    />
                  </div>

                  <div className='col-lg-3 mb-3'>
                    <label htmlFor='city' className='form-label'>
                      City
                    </label>
                    <input
                      type='text'
                      id='city'
                      name='city'
                      className='form-control'
                      value={values.city}
                      onChange={handleChange}
                    />
                    <FormikValidationError
                      name='city'
                      touched={touched}
                      errors={errors}
                    />
                  </div>

                  <div className='col-lg-3 mb-3'>
                    <label htmlFor='document' className='form-label'>
                      Document
                    </label>
                    <input
                      type='file'
                      id='document'
                      name='document'
                      className='form-control'
                      onChange={(e) => {
                        touched['document'] = true;
                        if (e.target.files.length) {
                          setFieldValue('document', e.target?.files[0]);
                        }
                      }}
                    />
                    <FormikValidationError
                      name='document'
                      touched={touched}
                      errors={errors}
                    />
                  </div>

                  <div className='col-lg-3 mb-3'>
                    <label htmlFor='' className='form-label'>
                      Two Way Active
                    </label>
                    <div>
                      <div className='form-check form-check-inline'>
                        <input
                          type='radio'
                          name='twowayactive'
                          id='yes'
                          className='form-check-input'
                          checked={values.twowayactive === 'yes'}
                          value='yes'
                          onChange={handleChange}
                        />
                        <label className='form-check-label' htmlFor='yes'>
                          Yes
                        </label>
                      </div>

                      <div className='form-check form-check-inline'>
                        <input
                          type='radio'
                          name='twowayactive'
                          id='no'
                          className='form-check-input'
                          checked={values.twowayactive === 'no'}
                          value='no'
                          onChange={handleChange}
                        />
                        <label className='form-check-label' htmlFor='no'>
                          No
                        </label>
                      </div>
                    </div>

                    <FormikValidationError
                      name='twowayactive'
                      touched={touched}
                      errors={errors}
                    />
                  </div>

                  {values.twowayactive === 'yes' && (
                    <>
                      <div className='col-lg-3 mb-3'>
                        <label htmlFor='returndate' className='form-label'>
                          Return Date
                        </label>
                        <input
                          type='date'
                          id='returndate'
                          name='returndate'
                          className='form-control'
                          value={values.returndate}
                          onChange={handleChange}
                        />
                        <FormikValidationError
                          name='returndate'
                          touched={touched}
                          errors={errors}
                        />
                      </div>

                      <div className='col-lg-3 mb-3'>
                        <label htmlFor='returnfrom' className='form-label'>
                          Return From
                        </label>
                        <input
                          type='date'
                          id='returnfrom'
                          name='returnfrom'
                          className='form-control'
                          value={values.returnfrom}
                          onChange={handleChange}
                        />
                        <FormikValidationError
                          name='returnfrom'
                          touched={touched}
                          errors={errors}
                        />
                      </div>

                      <div className='col-lg-3 mb-3'>
                        <label htmlFor='returnto' className='form-label'>
                          Return To
                        </label>
                        <input
                          type='date'
                          id='returnto'
                          name='returnto'
                          className='form-control'
                          value={values.returnto}
                          onChange={handleChange}
                        />
                        <FormikValidationError
                          name='returnto'
                          touched={touched}
                          errors={errors}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className='col-12'>
                <div className='d-flex justify-content-end mt-4'>
                  {
                    <button
                      type='submit'
                      className='btn btn-primary text-white'
                    >
                      Submit
                    </button>
                  }
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingDetail;
