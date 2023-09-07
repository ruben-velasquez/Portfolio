export function deleteProyect(id) {
  return fetch(`/dashboard/proyect/delete/${id}`);
}
