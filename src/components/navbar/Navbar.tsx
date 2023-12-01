import { useContext } from 'react';
import './Navbar.css'
import { Body1Strong } from '@fluentui/react-components';
import { LanguageContext } from '../../language/Language';


const Navbar = () => {
  const { languageData } = useContext(LanguageContext) as { languageData: { [key: string]: string } };

  return (
    <div className="navbar">
      <Body1Strong>
        {languageData.appHeader}
      </Body1Strong>
    </div>
  );
}

export default Navbar;