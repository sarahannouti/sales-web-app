import { Grid, Skeleton, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import useProduct from "../../hooks/useProduct";
import { ProductCondition } from "../ProductCondition";
import { ProductImage } from "../ProductImage";
import { ProductPrice } from "../ProductPrice";

export default function ProductPage() {
  const { id } = useParams();
  const { isLoading, error, data: product } = useProduct(id);

  //if (isLoading) return "_";
  if (error) return console.error(error);

  //const { name, imageUrl, description, price, condition } = product;

  return (
    <>
      <Typography variant="h1">
        {isLoading ? <Skeleton /> : product.name}
      </Typography>
      <Grid container spacing={2} sx={{ px: 2 }}>
        <Grid item md={4}>
          {isLoading ? (
            <Skeleton variant="rectangular" width={350} height={350} />
          ) : (
            <ProductImage
              imageUrl={product.imageUrl}
              name={product.name}
              width={350}
              height={350}
            />
          )}
        </Grid>
        <Grid container item direction="column" md={8}>
          <Grid container item spacing={2} sx={{ pb: 2 }}>
            <Grid item>
              {isLoading ? (
                <Skeleton />
              ) : (
                <ProductCondition condition={product.condition} />
              )}
            </Grid>
            <Grid item>
              {isLoading ? (
                <Skeleton />
              ) : (
                <ProductPrice price={product.price} />
              )}
            </Grid>
          </Grid>
          <Grid item>
            {isLoading ? (
              <Skeleton />
            ) : (
              <Typography>{product.description}</Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
