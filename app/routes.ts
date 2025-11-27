import { type RouteConfig, index, route} from "@react-router/dev/routes";

export default [index("routes/home.tsx"),  route("products", "routes/products.tsx"), 
  
  route("api/products", "routes/api/products.ts")] satisfies RouteConfig;
