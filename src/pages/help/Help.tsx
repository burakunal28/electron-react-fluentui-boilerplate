import { 
  useState,
  useEffect
} from 'react';
import { 
  Text,
  Subtitle2Stronger,
  Badge,
  Card,
  CardHeader,
} from "@fluentui/react-components";
import {
  QuestionCircle20Filled,
  QuestionCircle16Filled,
  Earth20Filled,
  DarkTheme20Filled,
  CloudCheckmark20Filled,
  DesktopCheckmark20Filled,
} from "@fluentui/react-icons";
import './Help.css';

function Help() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const width = window.screen.width;
  const minWidth = Math.round(width * 0.7);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    const style = document.createElement('style');
    document.head.appendChild(style);

    if (style.sheet) {
      style.sheet.insertRule(`
        @media (max-width: ${minWidth}px) {
          .help-title-badge {
            height: 1.5rem !important;
          }
        }
      `, style.sheet.cssRules.length);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>  

      <div className="help-title-container">
        <div className="help-title">
          <Badge
            className="help-title-badge"
            shape="rounded"
            color="important"
            appearance="outline"
            icon={windowWidth > minWidth ? <QuestionCircle20Filled /> : <QuestionCircle16Filled />}
          >
            <Subtitle2Stronger>
              Help Page
            </Subtitle2Stronger>
          </Badge>
        </div>
      </div>

      <div className="help-object-container">
        <div className="help-object-header">
          <Text weight="bold">
            User Interface
          </Text>
          <Badge shape="rounded" appearance="outline" color="important">
            Lorem ipsum dolor sit amet
          </Badge>
        </div>
        <Card 
          className="help-object-card"
          appearance="filled"
        >
          <CardHeader
            image={<Earth20Filled  />}
            header={
              <Text weight="semibold">
                Language
              </Text>
            }
          />
          <p className="help-object-text">
            Lorem ipsum dolor sit amet
          </p>
        </Card>
        <Card 
          className="help-object-card"
          appearance="filled"
        >
          <CardHeader
            image={<DarkTheme20Filled />}
            header={
              <Text weight="semibold">
                Theme
              </Text>
            }
          />
          <p className="help-object-text">
            Lorem ipsum dolor sit amet
          </p>
        </Card>
        <Card 
          className="help-object-card"
          appearance="filled"
        >
          <CardHeader
            image={<DesktopCheckmark20Filled  />}
            header={
              <Text weight="semibold">
                Auto Start
              </Text>
            }
          />
          <p className="help-object-text">
            Lorem ipsum dolor sit amet
          </p>
        </Card>
        <Card 
          className="help-object-card"
          appearance="filled"
        >
          <CardHeader
            image={<CloudCheckmark20Filled  />}
            header={
              <Text weight="semibold">
                Auto Update
              </Text>
            }
          />
          <p className="help-object-text">
            Lorem ipsum dolor sit amet
          </p>
        </Card>
      </div>
    </>
  );
}

export default Help;