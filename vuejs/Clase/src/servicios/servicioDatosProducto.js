import http from "./http-axios";

class servicioDatosProducto {
    getAll() {
        return http.get("/productos");
    }

    get(id) {
        return http.get(`/producto/${id}`);
    }

    create(data) {
        return http.post("/producto", data);
    }

    update(id, data) {
        return http.put(`/producto/${id}`, data);
    }

    delete(id) {
        return http.delete(`/producto/${id}`);
    }

    deleteAll() {
        return http.delete(`/productos`);
    }

    findByNombre(nombre) {
        return http.get(`/productos?q=${nombre}`);
    }
}

export default new servicioDatosProducto();
