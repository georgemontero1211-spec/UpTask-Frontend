import { Navigate, useLocation, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getTaskById } from "@/services/TaskServices";
import EditTaskModal from "./EditTaskModal";
import type { Task } from "@/types";
import type { Id } from "react-toastify";

export default function EditTaskData() {
  const params = useParams();
  const projectId = params.projectId!;

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const taskId = queryParams.get("editTask")!;

  const { data, isError } = useQuery({
    queryKey: ["task", taskId],
    queryFn: () => getTaskById({ projectId, taskId }),
    enabled: !!taskId,
  });
  const taskData = data;

  if (isError) return <Navigate to={"/404"} />;
  if (data) return <EditTaskModal data={taskData} taskId={taskId} />;
}
