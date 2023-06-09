import { label } from "next-api-middleware";



const addRequestId = async (req, res, next) => {
  // Let remaining middleware and API route execute

  // Apply header
  req.user = "hello"

  await next();
};

// 2 – Use `label` to assemble all middleware

const withMiddleware = label(
  {
    addRequestId,
  },
  ["addRequestId"] // <-- Provide a list of middleware to call automatically
);

// 3 – Define your API route handler

const apiRouteHandler = async (req, res) => {
  res.status(200);
  res.send(req.user);
};

// 4 – Choose middleware to invoke for this API route

export default withMiddleware("addRequestId")(apiRouteHandler);