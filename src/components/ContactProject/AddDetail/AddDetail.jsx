import React, { Component } from 'react';
import DetailList from 'components/ContactProject/DetailList';
import DeletedDetailList from 'components/ContactProject/DeletedDetailList';
import { v4 as uuidv4 } from 'uuid';
import { setStorageData, getStorageData } from 'utils/localstorage';

const storageKey = {
  addedListData: 'addedListData',
  deletedListData: 'deletedListData',
};

class AddDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        id: '',
        name: '',
        email: '',
        phoneno: '',
      },
      validations: {
        name: {
          required: true,
          touched: false,
          invalid: true,
          validationMessage: 'Name is required',
        },
        email: {
          required: true,
          touched: false,
          invalid: true,
          validationMessage: 'Email is required',
        },
        phoneno: {
          required: true,
          touched: false,
          invalid: true,
          validationMessage: 'Phone No. is required',
        },
      },
      addedListData: [],
      deletedListData: [],
      editState: false,
    };
  }

  componentDidMount() {
    if (getStorageData(storageKey.addedListData)) {
      const addedListData = getStorageData(storageKey.addedListData);
      this.setState({
        addedListData,
      });
    }

    if (getStorageData(storageKey.deletedListData)) {
      const deletedListData = getStorageData(storageKey.deletedListData);
      this.setState({
        deletedListData,
      });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      values: { id, name, email, phoneno },
      editState,
      addedListData,
    } = this.state;
    if (name && email && phoneno) {
      if (editState) {
        const editedListData = addedListData.filter(
          (listData) => listData.id !== id
        );
        this.setState(
          (prevState) => ({
            ...prevState,
            addedListData: [...editedListData, { id, name, email, phoneno }],
            values: { name: '', email: '', phoneno: '' },
            editState: false,
          }),
          () =>
            setStorageData(storageKey.addedListData, this.state.addedListData)
        );
      } else {
        this.setState(
          (prevState) => ({
            ...prevState,
            addedListData: [
              ...prevState.addedListData,
              { id: uuidv4(), name, email, phoneno },
            ],
            values: { name: '', email: '', phoneno: '' },
          }),
          () =>
            setStorageData(storageKey.addedListData, this.state.addedListData)
        );
      }
    }
  };

  handleChange = (event) => {
    this.setState(
      (prevState) => ({
        ...prevState,
        values: {
          ...prevState.values,
          [event.target.name]: event.target.value,
        },
        validations: {
          ...prevState.validations,
          [event.target.name]: {
            ...prevState.validations[event.target.name],
            touched: true,
          },
        },
      }),
      () => {
        this.setState((prevState) => ({
          ...prevState,
          values: {
            ...prevState.values,
            [event.target.name]: event.target.value,
          },
          validations: {
            ...prevState.validations,
            [event.target.name]: {
              ...prevState.validations[event.target.name],
              invalid: this.state.values[event.target.name].length > 0 || false,
            },
          },
        }));
      }
    );
  };

  handleEdit = (listData) => {
    const { id, name, email, phoneno } = listData;
    this.setState({
      editState: true,
      values: { name, email, phoneno, id },
    });
  };

  handleDelete = (listData) => {
    const { addedListData } = this.state;
    const newListData = addedListData.filter((data) => data.id !== listData.id);
    this.setState(
      (prevState) => ({
        ...prevState,
        addedListData: newListData,
        deletedListData: [...prevState.deletedListData, listData],
      }),
      () => {
        setStorageData(storageKey.addedListData, this.state.addedListData);
        setStorageData(storageKey.deletedListData, this.state.deletedListData);
      }
    );
  };

  handleClear = () => {
    this.setState({
      values: {
        name: '',
        email: '',
        phoneno: '',
      },
      editState: false,
    });
  };

  handleRestore = (listData) => {
    const newDeletedListData = this.state.deletedListData.filter(
      (data) => data.id !== listData.id
    );
    this.setState(
      (prevState) => ({
        ...prevState,
        addedListData: [...prevState.addedListData, listData],
        deletedListData: newDeletedListData,
      }),
      () => {
        setStorageData(storageKey.addedListData, this.state.addedListData);
        setStorageData(storageKey.deletedListData, this.state.deletedListData);
      }
    );
  };

  render() {
    const {
      values,
      validations: { name, email, phoneno },
      addedListData,
      deletedListData,
      editState,
    } = this.state;

    return (
      <>
        <main>
          <div className='py-5 text-center'>
            <h2>Add Contact Details</h2>
          </div>
          <div className='row g-3'>
            <div className='col'>
              <form onSubmit={this.handleSubmit}>
                <div className='row g-3'>
                  <div className='col-12 mb-2'>
                    <div className='row'>
                      <div className='col-lg-4'>
                        <label htmlFor='name' className='form-label'>
                          Name
                        </label>
                        <input
                          type='text'
                          id='name'
                          name='name'
                          className='form-control'
                          value={values.name}
                          onChange={this.handleChange}
                          onFocus={this.handleChange}
                        />
                        {name.touched && name.required && !name.invalid && (
                          <div className='validation'>
                            {name.validationMessage}
                          </div>
                        )}
                      </div>

                      <div className='col-lg-4'>
                        <label htmlFor='email' className='form-label'>
                          Email
                        </label>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          className='form-control'
                          value={values.email}
                          onChange={this.handleChange}
                          onFocus={this.handleChange}
                        />
                        {email.touched && email.required && !email.invalid && (
                          <div className='validation'>
                            {email.validationMessage}
                          </div>
                        )}
                      </div>

                      <div className='col-lg-4'>
                        <label htmlFor='phoneno' className='form-label'>
                          Phone No.
                        </label>
                        <input
                          type='text'
                          id='phoneno'
                          name='phoneno'
                          className='form-control'
                          value={values.phoneno}
                          onChange={this.handleChange}
                          onFocus={this.handleChange}
                        />
                        {phoneno.touched &&
                          phoneno.required &&
                          !phoneno.invalid && (
                            <div className='validation'>
                              {phoneno.validationMessage}
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='d-flex justify-content-end mt-4'>
                      {editState && (
                        <button
                          className='btn btn-secondary mr-2'
                          onClick={this.handleClear}
                          type='button'
                        >
                          Clear
                        </button>
                      )}
                      {
                        <button
                          type='submit'
                          className='btn btn-primary text-white'
                          disabled={
                            !values.name || !values.phoneno || !values.email
                          }
                        >
                          {editState ? 'Update' : 'Add'}
                        </button>
                      }
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>

        {/*Detail List */}
        <DetailList
          addedListData={addedListData}
          onHandleEdit={this.handleEdit}
          onHandleDelete={this.handleDelete}
        />

        {/* Deleted List */}
        <DeletedDetailList
          deletedListData={deletedListData}
          onHandleRestore={this.handleRestore}
        />
      </>
    );
  }
}

export default AddDetail;
