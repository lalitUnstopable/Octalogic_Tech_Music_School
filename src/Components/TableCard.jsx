import { SlOptionsVertical } from 'react-icons/sl';


export default function TableCard({id,Name,Description,Instructor,Instrument,Day_of_the_Week,No_of_Students,Price,Status}) {
    return (
      <tr className="mt-10 border-2">
        <td className="p-2">{Name}</td>
        <td className="p-2">{Description}</td>
        <td className="p-2">{Instructor}</td>
        <td className="p-2">{Instrument}</td>
        <td className="p-2">{Day_of_the_Week}</td>
        <td className="p-2">{No_of_Students}</td>
        <td className="p-2">{Price}</td>
        <td className="p-2">{Status}</td>
        <td className="p-2" ><SlOptionsVertical className="m-auto"/></td>
    </tr>
    );
  }
  