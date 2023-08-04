import React from 'react'
import { Route, Routes } from 'react-router-dom'
import viewsRoutes from './viewRoutes'

export type AppMainLayoutPropType = {}

/**
 * Componente que define o layout principal da aplicação e que chama a validação de login
 *
 * @author Felipe Shimada <felipe.shimada@kepha.com.br>
 * @param {AppMainLayoutPropType} props
 */
function AppMainLayout(props: AppMainLayoutPropType): JSX.Element {

    return (
        <>
            <div >
                <div>

                    <div>
                        <Routes>
                            {viewsRoutes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={<route.component />}
                                />
                            ))}
                        </Routes>
                    </div>
                </div>


            </div>
        </>
    )
}

export default AppMainLayout
