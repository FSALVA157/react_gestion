import { Layout } from 'antd'
import { Route, Routes, Outlet } from 'react-router-dom'
import AppBreadcrumb from './breadcrumb/AppBreadcrumb'
import HomePage from '../../../home/components/HomePage'
import ParametricasPage from '../../../parametricas/components/parametricasPage'
import PaisesContainer from '../../../parametricas/components/paises/paisesContainer'
import ProvinciasContainer from '../../../parametricas/components/provincias/provinciasContainer'
import DepartamentosContainer from '../../../parametricas/components/departamentos/departamentosContainer'
import LocalidadesContainer from '../../../parametricas/components/localidades/localidadesContainer'
import CategoriasIvaContainer from '../../../parametricas/components/categorias_iva/categoriasIvaContainer'
import TiposComprobanteContainer from '../../../parametricas/components/tipos_comprobante/tiposComprobanteContainer'
import TiposImpuestoContainer from '../../../parametricas/components/tipos_impuesto/tiposImpuestoContainer'
import TiposIvaContainer from '../../../parametricas/components/tipos_iva/tiposIvaContainer'
import TiposOficinaContainer from '../../../parametricas/components/tipos_oficina/tiposOficinaContainer'
import OficinasContainer from '../../../parametricas/components/oficinas/oficinasContainer'

import './AppContent.scss'
//import ExpedientesContainer from '../../../expedientes/expedientesContainer'
//import ComprasMainContainer from '../../../compras/comprasMainContainer'
//import InventarioContainer from '../../../inventario/inventarioContainer'
//import PresupuestosContainer from '../../../presupuestos/presupuestosContainer'

const { Content } = Layout

const AppContent = () => {
  /*  <Route path='/home' component={ HomePage }/>
    <Route path='/compras' component={ ComprasMainContainer }/>
    <Route path='/expedientes' component={ ExpedientesContainer }/>
    <Route path='/inventario' component={ InventarioContainer }/>
    <Route path='/presupuestos' component={ PresupuestosContainer }/>
    */
  return (
    <Content>
      <div style={{ padding: 16 }}>
        <AppBreadcrumb />
        <section className='route-section'>
          <Routes >
            <Route path='/home' element={<HomePage />} />
            <Route path="parametricas" element={<ParametricasPage />} />
            <Route path="parametricas/paises" element={<PaisesContainer />} />
            <Route path="parametricas/provincias" element={<ProvinciasContainer />} />
            <Route path={'departamento'} element={<DepartamentosContainer />} />
            <Route path={'localidades'} element={<LocalidadesContainer />} />
            <Route path={'categorias_iva'} element={<CategoriasIvaContainer />} />
            <Route path={'ipos_comprobant'} element={<TiposComprobanteContainer />} />
            <Route path={'tipos_impusto'} element={<TiposImpuestoContainer />} />
            <Route path={'tipos_iva'} element={<TiposIvaContainer />} />
            <Route path={'tipos_ofiina'} element={<TiposOficinaContainer />} />
            <Route path={'oficinas'} element={<OficinasContainer />} />
          </Routes>
          <Outlet />
        </section>
      </div>
    </Content>
  )
}

export default AppContent
