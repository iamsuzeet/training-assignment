import React from 'react';

const DeletedDetailList = (props) => {
  const { deletedListData, onHandleRestore } = props;
  return (
    <div className='mt-4'>
      <h2>Deleted Data List</h2>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Phone No.</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>

        <tbody>
          {deletedListData.length ? (
            deletedListData.map((data, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phoneno}</td>
                <td>
                  <span
                    style={{ marginRight: '15px', cursor: 'pointer' }}
                    title='Restore'
                    onClick={() => onHandleRestore(data)}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      className='bi bi-plus-square'
                      viewBox='0 0 16 16'
                    >
                      <path d='M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z' />
                      <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
                    </svg>
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan='5' className='text-center'>
                No data to display
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DeletedDetailList;
