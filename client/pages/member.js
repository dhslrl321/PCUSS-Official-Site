import Lab from "../components/sections/Lab";
import { data as labData } from "../datas/LabData";
import Club from "../components/sections/Club";
import withHead from "../commons/withHead";
const member = () => {
  return (
    <>
      <Lab data={labData} />
    </>
  )
}

export default withHead(member, "구성원", "배재대학교 정보보안학과에 다양한 랩실/연구실과 소모임이 있습니다.")