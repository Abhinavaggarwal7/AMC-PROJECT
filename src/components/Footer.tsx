import { Box, Typography, Link } from '@mui/material';
import { bgColor, color, h5_, h6, h6_, titleColor } from '@/constants';
import dynamic from 'next/dynamic';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Email } from '@mui/icons-material';
import { social, contactInfo } from '@/data/contact';
import { pages } from '@/data/navigation';

const Footer = () => {
    const iconStyles = {
        '&:hover': {
            scale: '1.2',
        },
        transition: '300ms ease',
        fontSize: h5_,
        color: color,
    };

    const NavigationChildren = () => (
        <Box
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: h6,
            }}
        >
            {pages.map((sectionName, index) => {
                return (
                    <Link
                        key={index}
                        underline="none"
                        href={`/${sectionName.toLowerCase()}`}
                        color={color}
                    >
                        <Typography variant="h1" fontSize={h6_}>
                            {sectionName}
                        </Typography>
                    </Link>
                );
            })}
        </Box>
    );

    const ContactChildren = () => (
        <>
            <Box
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    color: color,
                    gap: h6,
                }}
            >
                {contactInfo.map((contactInfoLine, index) => {
                    return (
                        <Typography
                            key={index}
                            variant="h1"
                            style={{
                                fontSize: h6_,
                            }}
                        >
                            {contactInfoLine}
                        </Typography>
                    );
                })}
            </Box>
        </>
    );

    const AMC_Children = () => (
        <>
            <Box
                style={{
                    display: 'flex',
                    gap: '6px',
                    justifyContent: 'space-between',
                    maxWidth: '40%',
                    color: color,
                }}
            >
                <Link href={social.facebook}>
                    <FacebookIcon sx={iconStyles} />
                </Link>
                <Link href={social.instagram}>
                    <InstagramIcon sx={iconStyles} />
                </Link>
                <Link href={social.Email}>
                    <Email sx={iconStyles} />
                </Link>
            </Box>
        </>
    );

    const Section = ({ title, children }) => (
        <Box>
            <Typography
                variant="h1"
                style={{
                    color: titleColor,
                    marginBottom: '30px',
                    fontSize: h5_,
                    fontWeight: 'bolder',
                }}
            >
                {title}
            </Typography>
            {children}
        </Box>
    );

    return (
        <Box
            style={{
                backgroundColor: bgColor,
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    display: {
                        xs: 'flex',
                        md: 'grid',
                    },
                    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                    flexDirection: 'column',
                    borderStyle: 'solid',
                    borderColor: color,
                    borderWidth: '0.3px 0 0 0',
                    gap: '70px',
                    width: '85%',
                    margin: '0 auto',
                    padding: '40px 0',
                }}
            >
                <Section title="AMC">
                    <AMC_Children />
                </Section>

                <Section title="Navigation">
                    <NavigationChildren />
                </Section>

                <Section title="Contact">
                    <ContactChildren />{' '}
                </Section>
            </Box>
        </Box>
    );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
