import React, {useEffect, useState} from 'react';
import profile from '@/assets/images/hero-image-01.png';
import UserInterface from '@/interfaces/user.interface';
import UserService from '@/services/user.service';
import Filter from '@/utils/filter';

const ProfileComponent: React.FC<any> = () => {
    const [user, setUser] = useState<UserInterface>();

    useEffect(() => {
        retrieveUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const retrieveUser = () => {
        const userStr = localStorage.getItem("user");
        let storage: any = null;

        if (userStr) {
            storage = JSON.parse(userStr);
        }

        if (storage && storage.user.id) {
            const userID: number = storage.user.id;

            UserService.get(userID)
                .then((response: any) => {
                    setUser(response.data);
                })
                .catch((e: Error) => {
                    console.log(e);
                });
        }
    };

    return (
        <div className="relative bg-white pt-[120px] pb-[110px] lg:pt-[150px]">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    {user &&
                        <div className="w-full px-4 lg:w-5/12">
                            <div className="hero-content">
                                <h1
                                    className="mb-3 text-4xl font-bold leading-snug tracking-wide text-dark sm:text-[42px] lg:text-[40px] xl:text-[42px]"
                                >
                                    {user.fullname}
                                </h1>
                                <h3
                                    className="mb-12 text-4xl leading-snug text-dark sm:text-[28px] lg:text-[26px] xl:text-[28px]"
                                >
                                    {user.roles.description}
                                </h3>
                                <h3
                                    className="mb-3 text-4xl leading-snug text-dark sm:text-[18px] lg:text-[16px] xl:text-[18px]"
                                >
                                    <strong>Usuario:</strong> {user.username}
                                </h3>
                                <h3
                                    className="mb-3 text-4xl leading-snug text-dark sm:text-[18px] lg:text-[16px] xl:text-[18px]"
                                >
                                    <strong>Correo electrónico:</strong> {user.email}
                                </h3>
                                <h3
                                    className="mb-3 text-4xl leading-snug text-dark sm:text-[18px] lg:text-[16px] xl:text-[18px]"
                                >
                                    <strong>Fecha de creación:</strong> {Filter.formatDate(user.created_at, 'LLL')}
                                </h3>
                            </div>
                        </div>
                    }
                    <div className="w-full px-4 lg:w-6/12">
                        <div className="lg:ml-auto lg:text-right">
                            <div className="relative z-10 inline-block pt-11 lg:pt-0">
                                <img src={profile} className="max-w-full lg:ml-auto" alt="profile"/>
                                <span className="absolute -left-8 -bottom-8 z-[-1]">
                                  <svg
                                      width="93"
                                      height="93"
                                      viewBox="0 0 93 93"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3"/>
                                    <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3"/>
                                    <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3"/>
                                    <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3"/>
                                    <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3"/>
                                    <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3"/>
                                    <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3"/>
                                    <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3"/>
                                    <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3"/>
                                    <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3"/>
                                    <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3"/>
                                    <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3"/>
                                    <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3"/>
                                    <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3"/>
                                    <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3"/>
                                    <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3"/>
                                    <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3"/>
                                    <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3"/>
                                    <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3"/>
                                    <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3"/>
                                    <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3"/>
                                    <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3"/>
                                    <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3"/>
                                    <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3"/>
                                    <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3"/>
                                  </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileComponent
