import * as MUI from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart, LineChart } from "@mui/x-charts";

const drawerWidth = 330;

const data = [
  { id: 0, value: 10, label: "Clients" },
  { id: 1, value: 15, label: "Products" },
  { id: 2, value: 20, label: "Sales" },
];

export default function Chart() {
  return (
    <MUI.Container
      sx={{
        marginTop: "50px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        padding: "0px",
        gap: "30px",
        width: "100%",
        height: "100%",
      }}
    >
      <MUI.Paper elevation={8} sx={{ order: 0 }}>
        <BarChart
          series={[
            { data: [3, 4, 1, 6, 5], stack: "A", label: "Electronic" },
            { data: [4, 3, 1, 5, 8], stack: "A", label: "Gaming" },
            { data: [4, 2, 5, 4, 1], stack: "B", label: "Sports" },
            { data: [2, 8, 1, 3, 1], stack: "B", label: "Men's Fashion" },
            { data: [10, 6, 5, 8, 9], label: "Bikes" },
          ]}
          width={700}
          height={530}
        />
      </MUI.Paper>
      <MUI.Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "0px",
          gap: "30px",
          width: "1000px",
          height: "300px",
          order: 1,
        }}
      >
        <MUI.Paper elevation={8} sx={{ order: 0 }}>
          <PieChart
            series={[
              {
                data,
                highlightScope: { faded: "global", highlighted: "item" },
                faded: {
                  innerRadius: 30,
                  additionalRadius: -30,
                  color: "gray",
                },
              },
            ]}
            width={400}
            height={250}
          />
        </MUI.Paper>
        <MUI.Paper elevation={8} sx={{ order: 0 }}>
        <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={400}
      height={250}
    />
        </MUI.Paper>
      </MUI.Box>
    </MUI.Container>
  );
}
