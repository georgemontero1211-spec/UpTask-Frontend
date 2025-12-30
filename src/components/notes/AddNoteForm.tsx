import type { NoteFormData } from "@/types";
import { useForm } from "react-hook-form";
import ErrorMenssage from "../ErrorMessage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNote } from "@/services/NoteServices";
import { toast } from "react-toastify";
import { useLocation, useParams } from "react-router-dom";

export default function AddNoteForm() {
  const params = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const taskId = queryParams.get("viewTask")!;
  const projectId = params.projectId!;

  const initialValues: NoteFormData = {
    content: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: initialValues });

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: createNote,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data);
      reset();
      queryClient.invalidateQueries({ queryKey: ["task", taskId] });
    },
  });

  const handleAddNote = (formData: NoteFormData) => {
    mutate({ projectId, taskId, formData });
  };

  return (
    <form
      onSubmit={handleSubmit(handleAddNote)}
      className="space-y-3"
      noValidate
    >
      <div className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="content">
          Creat Nota
        </label>
        <input
          id="content"
          type="text"
          placeholder="Contenido de la nota"
          className="w-full p-3 border border-gray-300"
          {...register("content", { required: "El contenido es obligatorio" })}
        />
        {errors.content && (
          <ErrorMenssage>{errors.content.message}</ErrorMenssage>
        )}
      </div>
      <input
        type="submit"
        value="Crea Nota"
        className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-2 text-white font-black 
        cursor-pointer"
      />
    </form>
  );
}
