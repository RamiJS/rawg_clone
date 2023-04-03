import { Platform } from "../Hooks/useGames";
import {
  BsPlaystation,
  BsXbox,
  BsNintendoSwitch,
  BsAndroid2,
  BsApple,
  BsWindows,
} from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import { FaLinux } from "react-icons/fa";
import { IconBase, IconType } from "react-icons/lib";

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
  ios: BsAndroid2,
  web: FiMonitor,
};

const Platforms = ({ platforms }: Props) => {
  return (
    <div className="flex flex-row gap-2">
      {platforms.map((platform) => {
        const Icon = iconList[platform.slug];
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

export default Platforms;
