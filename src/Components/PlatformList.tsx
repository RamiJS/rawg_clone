import {
  BsPlaystation,
  BsXbox,
  BsNintendoSwitch,
  BsAndroid2,
  BsApple,
  BsWindows,
  BsQuestionCircle,
} from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import { FaLinux } from "react-icons/fa";
import { SiSega } from "react-icons/si";
import { IconType } from "react-icons/lib";
import Platform from "../entities/Platform";

interface Props {
  platforms: Platform[];
}

const iconList: { [key: string]: IconType } = {
  pc: BsWindows,
  playstation: BsPlaystation,
  xbox: BsXbox,
  nintendo: BsNintendoSwitch,
  mac: BsApple,
  linux: FaLinux,
  android: BsAndroid2,
  ios: BsApple,
  web: BsWindows,
  sega: SiSega,
};

const PlatformList = ({ platforms }: Props) => {
  return (
    <div className="flex flex-row gap-2">
      {platforms.map((platform) => {
        const Icon = iconList[platform.slug];
        if (!Icon) {
          // The platform is not recognized, display an error message or a default icon
          return <BsQuestionCircle key={platform.id} />;
        }
        return (
          <Icon
            key={platform.id}
            className="text-gray-500 hover:text-white transition-colors duration-300"
          />
        );
      })}
    </div>
  );
};

export default PlatformList;
