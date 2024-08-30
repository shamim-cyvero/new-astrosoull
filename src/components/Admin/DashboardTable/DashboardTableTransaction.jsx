import React from "react";
import { Column, useTable, useSortBy, usePagination } from "react-table";

import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";
import {
  Button,
  HStack,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";

const columns = [
  {
    Header: "Course",
    accessor: "course",
  },
  {
    Header: "Banner",
    accessor: "banner",
  },
  {
    Header: "Category",
    accessor: "category",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Date",
    accessor: "date",
  },
 
];
const DashboardTableTransaction = ({ data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    state: { pageIndex },
    pageCount,
    gotoPage,
  } = useTable(
    { columns, data, initialState: { pageSize: 5 } },
    useSortBy,
    usePagination
  );
  return (
    <VStack w={{base:'100%',md:'80%',lg:'100%'}} bgColor={"white"} border={'1px solid green'}>
      {/* <Heading
        textAlign={"center"}
        letterSpacing={"3px"}
        fontWeight={"300"}
        textTransform={"uppercase"}
        children={"Latest User"}
      /> */}
      <TableContainer w={"100%"}>
        <Table>
          <Thead  {...getTableProps()}>
            {headerGroups.map((item) => (
              <Tr {...item.getHeaderGroupProps()}>
                {item.headers.map((column) => (
                  <Th bg={'#d8f9ff'} color={'black'} fontWeight={'800'}  {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    {column.isSorted && (
                      <span>
                        {column.isSortedDesc ? (
                          <AiOutlineSortDescending />
                        ) : (
                          <AiOutlineSortAscending />
                        )}
                      </span>
                    )}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);

              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                  ))}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <HStack pt={5}>
        {/* <Button
          onClick={() => gotoPage(0)}
          colorScheme={"blue"}
          children={"first"}
          disabled={pageIndex === 0}
        /> */}
        <Button
          disabled={!canPreviousPage}
          onClick={() => previousPage()}
          colorScheme={"red"}
          children={"prev"}
        />
        <span>
          {pageIndex + 1} of
          {pageCount}
        </span>
        <Button
          disabled={!canNextPage}
          onClick={() => nextPage()}
          colorScheme={"green"}
          children={"next"}
        />

        {/* <Button
          onClick={() => gotoPage(pageCount - 1)}
          colorScheme={"blue"}
          children={"first"}
          disabled={pageIndex >= pageCount - 1}
        /> */}
      </HStack>
    </VStack>
  );
};

export default DashboardTableTransaction;
