import axios from "axios";

const BASE_URL = 'http://localhost:1337/api';

const getPost = axios.get(BASE_URL+'/posts?populate=*');
const getPostById=(id)=>axios.get(BASE_URL+'/posts/'+id+'?populate=*');

export default { getPost, getPostById };