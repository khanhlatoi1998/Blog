import axiosClient from "./axiosApi";

const postApi = {
    getAll: (params?: any) => {
        let url = '/post/getAllPost';
        return axiosClient.get(url, { params });
    },

    getId: (id: string | null | undefined) => {
        let url = `/post/get/${id}`;
        return axiosClient.get(url);
    },

    createPost: (data: Object) => {
        let url = '/post/create';
        return axiosClient.post(url, { data });
    },

    updatePost: (data: Object) => {
        let url = `/post/update`;
        return axiosClient.put(url, { data });
    },

    deletePost: (id: string | null | undefined) => {
        let url = `/post/delete/${id}`;
        return axiosClient.post(url);
    },

    getCategory: (category: string | null | undefined) => {
        let url = `/category/${category}`;
        return axiosClient.get(url);
    },
};

export default postApi;

