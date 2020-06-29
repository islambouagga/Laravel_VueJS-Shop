import Vue from "vue";
import VueRouter from "vue-router";
import Users from "../views/Admin/Users";
import Customers from "../views/Admin/Customers";
import Products from "../views/Admin/Products";
import Categories from "../views/Admin/Categories";
import Orders from "../views/Admin/Orders";


Vue.use(VueRouter);

const routes = [
    {
        path: "/admin/users",
        name: "User",
        component: Users
    },
    {
        path: "/admin/customers",
        name: "Customers",
        component: Customers
    },
    {
        path: "/admin/products",
        name: "Products",
        component: Products
    },
    {
        path: "/admin/categories",
        name: "Categories",
        component: Categories
    },
    {
        path: "/admin/orders",
        name: "Orders",
        component: Orders
    },

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
