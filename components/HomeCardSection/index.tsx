import { Box, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { GET } from "../../services/httpClient";
import CardSession from "./cardSection";
import useStyles from "./styles";

export interface card {
  id: number;
  attributes: {
    body: string;
    createdAt: string;
    heading: string;
    publishedAt: string;
    updatedAt: string;
  };
}

export default function HomeCardSession() {
  const classes = useStyles();
  const [response, setResponse] = useState<card[]>([
    {
      id: 0,
      attributes: {
        body: "",
        createdAt: "",
        heading: "",
        publishedAt: "",
        updatedAt: "",
      },
    },
  ]);
  const [view, setView] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await GET("/home-cards");
    if (response.length) {
      setResponse(response);
      setView(true);
    }
  }

  return (
    <>
      {view && (
        <Box className={classes.root}>
          <Grid container spacing={7}>
            {response?.map((card: card, index: number) => {
              return <CardSession key={index} data={card} />;
            })}
          </Grid>
        </Box>
      )}
    </>
  );
}
