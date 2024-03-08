import { useGetActiveStatus } from "../../apis/getActiveStatus";
import ActiveStatusTab from "./Tab";

const UserActiveStatusEditor = () => {
  const {
    data: { name, activeStatus },
  } = useGetActiveStatus();

  return (
    <>
      <p className="text-lg font-bold">{name}</p>
      <p className="text-sm">본인의 회원 상태를 선택해주세요.</p>
      <ActiveStatusTab activeStatus={activeStatus} />
    </>
  );
};
export default UserActiveStatusEditor;
