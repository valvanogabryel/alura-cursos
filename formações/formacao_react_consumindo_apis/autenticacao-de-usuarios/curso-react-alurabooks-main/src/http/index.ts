import axios, { AxiosError } from "axios";
import { useObterToken } from "../hooks/useSessions";
import { history } from "../App";
import { ICategoria } from "../interfaces/ICategoria";
import { ILivro } from "../interfaces/ILivro";

const http = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    Accept: 'application/json',
    Content: 'application/json'
  }
});

http.interceptors.request.use(function (config) {
  const token = useObterToken();
  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`
  return config;
}, function (error: AxiosError) {
  console.log(error);
  return Promise.reject(error);
});

http.interceptors.response.use(function (response) {
  return response;
}, function (error: AxiosError) {
  if (error.response?.status === 401) {
    history.push('/');
    return Promise.reject();
  }
  return Promise.reject(error);
});

export default http;

export const obterCategoriaPorSlug = async (slug: string) => {
  const { data: [categoria] } = await http.get<ICategoria[]>(`categorias?slug=${slug}`);
  return categoria;
}

export const obterLivrosDestaques = async (tipo: string) => {
  const { data: livros } = await http.get<ILivro[]>(`public/${tipo}`);
  return livros;
}

export const obterLivrosPorCategoria = async (categoria: ICategoria) => {
  const { data: livros } = await http.get<ILivro[]>(`livros?categoria=${categoria.id}`);
  return livros;
}

export const obterAutor = async (id: number | undefined) => {
  try {
    const { data: autor } = await http.get(`autores/${id}`);
    return autor;
  } catch (error) {
    console.log(`Não foi possível obter o autor: ${error}`);
  }
}

export const obterLivrosPorSlug = async (slug: string) => {
  const { data: livro } = await http.get<ILivro[]>(`livros?slug=${slug}`);
  return livro[0];
}