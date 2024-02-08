import React, { useMemo } from "react";
import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } from "@/state/api";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import BoxHeader from "@/components/BoxHeader";
import { Box, Typography, useTheme } from "@mui/material";
import { Cell, Pie, PieChart } from "recharts";
import FlexBetween from "@/components/FlexBetween";



const Row3 = () => {
  const { palette } = useTheme();
  const { data: kpiData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  const { data: transactionsData } = useGetTransactionsQuery();

  const pieColors = [palette.primary[800], palette.primary[500]];

  const pieChartData = useMemo(() => {
    if (kpiData) {
      const totalExpenses = kpiData[0].totalExpenses;
      return Object.entries(kpiData[0].expensesByCategory).map(
        ([key, value]) => {
          return [
            {
              name: key,
              value: value,
            },
            {
              name: `${key} of Total`,
              value: totalExpenses - value,
            },
          ];
        }
      );
    }
  }, [kpiData]);


  // const pieChartData = useMemo(() => {
  //   if (kpiData) {
  //     const totalExpenses = kpiData[0].totalExpenses;
  //     return Object.entries(kpiData[0].expensesByCategory).map(
  //       ([key, value]) => {
  //         return [
  //           {
  //             name: key,
  //             value: value,
  //           },
  //           {
  //             name: `${key} of Total`,
  //             value: totalExpenses - value,
  //           },
  //         ];
  //       }
  //     );
  //   }  
  // }, [kpiData]);
  console.log(kpiData);
  console.log(pieChartData);

  const productColumn = [
    {
      field: "_id",
      headerName: "id",  
      flex: 1, // how much to take column space
    },
    {
      field: "expense",
      headerName: "Expense",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
  ];

  const transactionColumn = [
    {
      field: "_id",
      headerName: "id",  
      flex: 1, 
    },
    {
      field: "buyer",
      headerName: "Buyer",
      flex: 0.67,
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 0.35,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "productIds",
      headerName: "Count",
      flex: 0.1,
      renderCell: (params: GridCellParams) =>
        (params.value as Array<string>).length,
    },
  ];
  
  return (
    <>
      <DashboardBox gridArea="g">
        <BoxHeader 
          title="List of Products"
          sideText={`${productData?.length} products`}
        />
        <Box
          mt="0.5rem"
          p="0 0.5rem"
          height="75%"
          // sx prop 中使用类选择器，
          // & .MuiDataGrid-root -> 代表選取 Box子元素中所有class有MuiDataGrid-root
          // &:hover -> 代表hover Box
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
          }}
        >
          <DataGrid
            rows={productData || []}
            columns={productColumn}
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}

          />
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="h">
        <BoxHeader 
          title="Recent Orders"
          sideText={`${transactionsData?.length} latest transactions`}
        />
        <Box
          mt="1rem"
          p="0 0.5rem"
          height="80%"
          // sx prop 中使用类选择器，
          // & .MuiDataGrid-root -> 代表選取 Box子元素中所有class有MuiDataGrid-root
          // &:hover -> 代表hover Box
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
          }}
        >
          <DataGrid
            rows={transactionsData || []}
            columns={transactionColumn}
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}

          />
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="i">
        <BoxHeader 
          title="Expense Breakdown By Category"
          sideText="+4%"
        />
        <FlexBetween mt="0.5rem" gap="0.5rem" p="0 1rem" textAlign="center">
          {pieChartData?.map((data, i) => (
            <Box key={`${data[0].name}-${i}`}> 
              <PieChart
                width={90}
                height={80}
              >
                <Pie
                  stroke="none"
                  data={data}
                  innerRadius={18}
                  outerRadius={35}
                  paddingAngle={2}
                  // dataKey-value map to pieData.value
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index]} />
                  ))}
                </Pie>
              </PieChart>
              <Typography variant="h5">{data[0].name}</Typography>
            </Box>
          ))}
        </FlexBetween>
      </DashboardBox>
      <DashboardBox gridArea="j">
        <BoxHeader
          title="Overall Summary and Explanation Data"
          sideText="+15%"
        />
        <Box
          height="15px"
          margin="1.25rem 1rem 0.4rem 1rem"
          bgcolor={palette.primary[800]}
          borderRadius="1rem"
        >
          <Box
            height="15px"
            bgcolor={palette.primary[600]}
            borderRadius="1rem"
            width="40%"
          ></Box>
        </Box>
        <Typography margin="0 1rem" variant="h6">
          Orci aliquam enim vel diam. Venenatis euismod id donec mus lorem etiam
          ullamcorper odio sed. Ipsum non sed gravida etiam urna egestas
          molestie volutpat et. Malesuada quis pretium aliquet lacinia ornare
          sed. In volutpat nullam at est id cum pulvinar nunc.
        </Typography>
      </DashboardBox>
      {/* <DashboardBox gridArea="j"></DashboardBox> */}
    </>
  );
};

export default Row3