import axiosClient from "./axiosApi";

const postApi = {
    getAll: (params?: any) => {
        let url = '/post/getAllPost';
        return axiosClient.get(url, { params });
    },

    createPost: (data: Object) => {
        let url = '/post';
        return axiosClient.post(url, { data });
    },

    getId: (id: string | null | undefined) => {
        let url = `/post/${id}`;
        return axiosClient.get(url);
    },

    updatePost: (data: Object) => {
        let url = `/post/update`;
        return axiosClient.put(url, { data });
    },

    deletePost: (id: string | null | undefined) => {
        let url = `/post/delete/${id}`;
        return axiosClient.post(url);
    },

};

export default postApi;

