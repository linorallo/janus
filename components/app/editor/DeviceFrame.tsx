import { DeviceFrameset, DeviceFramesetProps } from "react-device-frameset";
import "react-device-frameset/lib/css/marvel-devices.min.css";
import { useContext, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { FaTablet } from "react-icons/fa";
import { IoPhonePortrait } from "react-icons/io5";
import { styled } from "../../../lib/AppTheme";
import { ThemeContext } from "../../../lib/ThemeContext";
const DeviceWrapper = styled.div`
  padding: 1rem 1rem;
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center; ;
`;
const DeviceScreenWrapper = styled.div`
  padding: 2rem 0 0 0;
`;

const DeviceToggleButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: ${(props) => props.theme.color.primary};
  border: none;
  padding: 0.5rem;
`;

const DeviceFrame = ({ children }: { children: any }) => {
  const [device, setDevice] = useState<any>("iPhone X");
  const themeCtx = useContext(ThemeContext);
  return (
    <DeviceWrapper>
      <DeviceFrameset device={device} color="white">
        <DeviceScreenWrapper>{children}</DeviceScreenWrapper>
      </DeviceFrameset>
      <DeviceToggleButton
        onClick={() =>
          setDevice(device === "iPad Mini" ? "iPhone X" : "iPad Mini")
        }
      >
        {device === "iPad Mini" && (
          <FaTablet size={30} color={themeCtx.appTheme.color.secondary} />
        )}
        {device === "iPhone X" && (
          <IoPhonePortrait
            size={30}
            color={themeCtx.appTheme.color.secondary}
          />
        )}
      </DeviceToggleButton>
    </DeviceWrapper>
  );
};

export default DeviceFrame;
