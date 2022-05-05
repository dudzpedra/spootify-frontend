import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import getCategories from "../../services/get-categories";
import "./styles.sass";

const Categories = ({ amount }) => {
  const [data, setData] = useState();

  useEffect(() => {
    getCategories(setData);
  }, []);
  return (
    <Box className="categories-container">
      <Box className="categories-header">
        <h1>
          {!amount && <a href="/">Home</a>}
          {!amount && " | "}
          <a href="/categories">Categories</a>
        </h1>
        {amount && (
          <h3>
            <a href="/categories">SEE ALL</a>
          </h3>
        )}
      </Box>
      <Box className="categories-grid">
        {data &&
          data.categories.items.slice(0, amount).map((item) => (
            <Box key={item.id} className="categories-item">
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <img alt={item.name} src={item.icons[0].url} />
                <h4>{item.name}</h4>
              </a>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default Categories;
