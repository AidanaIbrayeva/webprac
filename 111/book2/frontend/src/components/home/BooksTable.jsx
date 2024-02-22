import { Link } from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineDelete} from 'react-icons/md';

function BooksTable({ books }) {
  return (
    <table className='bg-green-500 w-full border-separate border-spacing-2'>
          <thead>
            <tr>
              <th className='bg-teal-100 border border-slate-600 rounded-md'>No</th>
              <th className='bg-teal-200 border border-slate-600 rounded-md'>Title</th>
              <th className='bg-teal-300 border border-slate-600 rounded-md max-md:hidden'>Author</th>
              <th className='bg-teal-400 border border-slate-600 rounded-md max-md:hidden'>Publish year</th>
              <th className='bg-teal-500 border border-slate-600 rounded-md'>Operations</th>
              <th className='bg-teal-600 border border-slate-600 rounded-md'>Genre</th>
              <th className='bg-teal-700 border border-slate-600 rounded-md'>Quantity</th>
              <th className='bg-teal-800 border border-slate-600 rounded-md'>Price</th>
            </tr>
          </thead>
          <tbody>
            {console.log(books)}
            {books.map((book, index) => 
              <tr key={book._id} className='h-8'>
                <td className='bg-amber-100 border border-slate-700 rounded-md text-center'>
                  {index + 1}
                </td>
                <td className='bg-amber-200 border border-slate-700 rounded-md text-center'>
                  {book.title}
                </td>
                <td className='bg-amber-300 border border-slate-700 rounded-md text-center'>
                  {book.author}
                </td>
                <td className='bg-amber-400 border border-slate-700 rounded-md text-center'>
                  {book.publishYear}
                </td>
                
                <td className='bg-amber-500 border border-slate-700 rounded-md text-center'>
                  <div className='flex justify-center gap-x-4'>
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle className='text-2xl text-green-800' />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className='text-2xl text-yellow-600' />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className='text-2xl text-red-600' />
                    </Link>
                  </div>
                </td>
                <td className='bg-amber-600 border border-slate-700 rounded-md text-center'>
                  {book.genre}
                </td>
                <td className='bg-amber-700 border border-slate-700 rounded-md text-center'>
                  {book.quantity}
                </td>
                <td className='bg-amber-800 border border-slate-700 rounded-md text-center'>
                  {book.price}
                </td>
              </tr>
            )}
          </tbody>
        </table>
  )
}

export default BooksTable