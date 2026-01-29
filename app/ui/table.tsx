export default function Table({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <table className="table-auto font-work_sans text-sm sm:text-base">
      <thead className="font-bold">
        <tr>
          {headers.map((item, i) => (
            <th
              className={`text-left pr-8 sm:min-w-[100px] h-[25px] sm:h-[50px] sm:pl-2  ${i % 2 != 0 ? "border-x-2 border-gray-300" : ""} `}
              key={`${item} + ${i}`}
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="font-medium">
        {rows.map((row, i) => (
          <tr
            className={` ${i % 2 == 0 ? "bg-gray-200" : "bg-gray-100"}`}
            key={row.length + i}
          >
            {row.map((content, i) => (
              <td
                className={` sm:pl-2 ${i % 2 != 0 ? "border-gray-300 border-solid border-x-2 pl-4" : ""} text-left pr-2 sm:pr-8 sm:min-w-[100px] h-[25px] sm:h-[50px]`}
                key={`${content} + ${i}`}
              >
                {content}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
