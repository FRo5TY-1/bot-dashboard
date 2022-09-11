import styled from "styled-components";

export const DashboardSidebar = styled.div`
  width: 20%;
  height: 100%;
  position: absolute;
  left: 0;
  display: flex;
  text-align: center;
  flex-direction: column;
  background-color: #252525;
  border-radius: 5px;
  border: 1px solid #ffffff14;
  margin: 0;
`;

export const SidebarModulesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const GuildNotSelected = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #252525;
  border-radius: 5px;
  border: 1px solid #ffffff14;
`;

export const GuildsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const GuildDroptdownStyle = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const SelectGuildDropdownStyle = styled.div`
  background-color: #413f3f;
  box-shadow: 3px 3px 3px 3px rgba(185, 189, 192, 0.089);
  margin: 10px 10px 0 10px;
  padding: 5px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const GuildDropdownOptionsStyle = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const GuildDropdownOptionStyle = styled.div`
  background-color: #413f3f;
  margin: 10px 10px 0 10px;
  padding: 2px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 3px rgba(185, 189, 192, 0.089);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Page = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const SidebarModuleStyle = styled.div`
  background-color: #413f3f;
  margin: 10px 10px 0 10px;
  padding: 2px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 3px rgba(185, 189, 192, 0.089);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ModuleContainer = styled.div`
  width: 76%;
  height: 88%;
  display: inline-block;
  top: 8%;
  left: 22%;
  position: relative;
  overflow: hidden;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-family: "DM Sans";
  font-size: 18px;
  background-color: inherit;
  padding: 12px 16px;
  color: #fff;
  border: 1px solid #3f3f3f;
  border-radius: 5px;
  & > option {
    background-color: #292929;
  }
`;

export const TextArea = styled.textarea`
  padding: 14px 16px;
  box-sizing: border-box;
  font-size: 16px;
  color: #fff;
  font-family: "DM Sans";
  background-color: #272727;
  border-radius: 5px;
  border: 1px solid #3f3f3f;
  outline: none;
  width: 100%;
  resize: none;
  :focus {
    outline: 1px solid #ffffff5a;
  }
`;

export const EmbedContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SmallImgContainer = styled.div`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 1px solid rgba(253, 252, 252, 0.658);
  border-style: dashed;
  border-radius: 50%;
  overflow: hidden;
  :hover {
    border-color: blue;
    transition: 0.5s;
  }
`;

export const StyledInput = styled.input`
  background-color: #24232399;
  border-radius: 2px;
  padding: 10px;
  font-size: 18px;
  display: inline-block;
  width: 60%;
`;

export const StyledTextArea = styled.textarea`
  background-color: #24232399;
  border-radius: 2px;
  padding: 10px;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  font-size: 18px;
  min-height: 18px;
  display: inline-block;
  resize: none;
  width: 60%;
`;
