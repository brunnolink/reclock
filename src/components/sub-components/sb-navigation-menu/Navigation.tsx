import Img from "../../../assets/img/logos/logo-reclock.png";
import Icon from "../../../assets/img/icon.png";
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import styles from "../sb-navigation-menu/styles.module.scss";


export const Navigation: React.FC = () => {
    return (
        <nav className={styles.navigation}>
            <div className={styles.firstdivinfos}>

                <div>
                    <img src={Img} alt="Logo REClock" />
                    <p>REClock</p>
                </div>

                <ul>
                    <li> <HomeIcon /> Home</li>
                    <li> <CalendarMonthIcon /> Meus pontos</li>
                    <li> <EditCalendarIcon /> Ajustar pontos</li>
                </ul>

            </div>

            <div className={styles.addtasks}>
                <p>Vamos começar</p>
                <p>Criar ou adicionar novas tarefas não poderia ser mais fácil</p>

                <div>
                    <p>+</p>
                    <p>Adicionar nova tarefa</p>
                </div>
            </div>

            <div className={styles.seconddivinfos}>
                <ul>
                    <li> <NotificationsIcon /> Notificações</li>
                    <li> <SettingsIcon /> Configurações</li>
                    <li> <HelpOutlineIcon /> Suporte</li>
                </ul>
            </div>

            <div className={styles.infos}>
                <img src={Icon} alt="Ícone perfil" />

                <div>
                    <p>Ana Beatriz da Silva</p>
                    <div>
                        <p>389873</p>
                        <p>Software Dev</p>
                    </div>
                </div>

                <LogoutIcon className={styles.iconlogout} />
            </div>
        </nav>
    )
}