// import React , { useState,useEffect} from 'react'
// import { Link } from 'react-router-dom';

// const ManageBooks = () => {
//   const [allBooks , setAllBooks] =useState([]);
//   useEffect(()=>{
//    fetch("http://localhost:5000/all-books").then( res => res.json()).then(data=>setAllBooks(data));
//   } ,[])
//   return (
//     <div>
//     <h2 className="text-center fw-bold mb-4">Manage Books</h2>
//     <div style={{ width: "80vw", padding: "20px" }}>
//       <div className="table-responsive">
//         <table className="table  table-borderless align-middle w-100px">
//           <thead className="table-light">
//             <tr>
//               <th scope="col"className="px-5">No</th>
//               <th scope="col"className="px-5">Book Name</th>
//               <th scope="col"className="px-5">Author Name</th>
//               <th scope="col"className="px-5">Category</th>
//               <th scope="col"className="px-5">Prices</th>
//               <th scope="col"className="px-5">
//                 <span className="">Edit or Manage</span>
//               </th>
//             </tr>
//           </thead>
//           {
//             allBooks.map((book,index)=><tbody  key={book._id}>
//               <tr className='border-top'>
//             <td className="fw-medium text-dark px-5">{index+1}</td>
//             <td className="px-5">{book.bookTitle}</td>
//             <td className="px-5">{book.authorName}</td>
//             <td className="px-5">{book.category}</td>
//             <td className="px-5">$10.00</td>
//             <td className='px-5'>
//               <Link to={`/admin/dashboard/edit-books/${book._id}`} className="text-primary fw-bold text-decoration-none">
//                 Edit
//               </Link>
//             </td>
//           </tr>
//             </tbody>)
//           }
// </table>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default ManageBooks

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  //delete books
  const handleDelete=(id)=>{
    fetch(`http://localhost:5000/book/${id}`,{
      method :"DELETE",
    }).then(res=>res.json()).then(data =>{
      alert("book deleted Successsfully")
      // setAllBooks(data);

    })
  }

  return (
    <div>
      <h2 className="text-center fw-bold mb-4">Manage Books</h2>
      <div style={{ width: "80vw", padding: "20px" }}>
        <div className="table-responsive">
          <table className="table table-borderless align-middle w-100px">
            <thead className="table-light">
              <tr>
                <th scope="col" className="px-5">No</th>
                <th scope="col" className="px-5">Book Name</th>
                <th scope="col" className="px-5">Author Name</th>
                <th scope="col" className="px-5">Category</th>
                <th scope="col" className="px-5">Price</th>
                <th scope="col" className="px-5">
                  <span className="">Edit or Manage</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {allBooks.map((item, index) => (
                <tr className="border-top" key={item._id}>
                  <td className="fw-medium text-dark px-5">{index + 1}</td>
                  <td className="px-5">{item.book?.bookTitle || "N/A"}</td>
                  <td className="px-5">{item.book?.authorName || "N/A"}</td>
                  <td className="px-5">{item.book?.category || "N/A"}</td>
                  <td className="px-5">$10.00</td>
                  {/* <td className="px-5 me-3">
                    <Link
                      to={`/admin/dashboard/edit-books/${item._id}`}
                      className="text-primary fw-bold text-decoration-none"
                    >
                      Edit
                    </Link>
                    <button type="button" class="btn btn-danger">Danger</button>
                  </td> */}
                  <td className="px-5">
  <div className="d-flex justify-content-between align-items-center">
    <Link
      to={`/admin/dashboard/edit-books/${item._id}`}
      className="text-primary fw-bold text-decoration-none"
    >
      Edit
    </Link>
    <button  onClick={()=> handleDelete(item._id)} type="button" className="btn btn-danger ms-3">
      Delete
    </button>
  </div>
</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageBooks;
