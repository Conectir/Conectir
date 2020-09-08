import React from 'react'
import Arrow from '../Arrow'
import { ACTIONS, useEquipmentDispatch } from '../../contexts/Equipment'
import './index.scss'

const Filters = () => {
  const [showAdvance, setShowAdvance] = React.useState(false)
  const [showNucleos, setShowNucleos] = React.useState(true)
  const [showProcesador, setShowProcesador] = React.useState(true)
  const dispatch = useEquipmentDispatch()

  const click = _ => {
    dispatch({
      type: ACTIONS.FILTER_BY_TIME
    })
  }

  return (
    <aside className={'filters'}>
      <article className='filters__header'>
        <h1 className='title' onClick={click}>Filtro</h1>
        <p className='filters__header__clean'>Limpiar</p>
      </article>

      <label className='filters__areas' htmlFor='areaEstudioFilter'>
        <h2 className='subtitle'>Área de estudio</h2>
        <select required name='areaEstudio' id='areaEstudioFilter' defaultValue='DEFAULT'>
          <option disabled hidden value='DEFAULT'>Selecciona el área de estudio</option>
          <option>Diseño</option>
          <option>Desarrollo</option>
          <option>Audiovisual</option>
          <option>Modelado 3D</option>
          <option>Programación iOs</option>
        </select>
      </label>

      <label className='filters__time filter_label' htmlFor='timeFilter'>
        <h2 className='subtitle'>Tiempo</h2>
        <input type='range' min='1' max='10' id='timeFilter' className='slider' />
        <div className='filters__time__hour'>
          <p>1h</p>
          <p>10h</p>
        </div>
      </label>

      <div className='filters__programs'>
        <h2 className='subtitle'>Programas</h2>
        <form>
          <label className='filters__programs__item' htmlFor='illustrator-option'>
            <input type='checkbox' id="illustrator-option" name="illustrator" />
            <img src={process.env.PUBLIC_URL + '/programas/Illustrator.png'} alt='Opción: Illustrator' />
            <span>Illustrator</span>
          </label>

          <label className='filters__programs__item' htmlFor='Photoshop-option'>
            <input type='checkbox' id="Photoshop-option" name="Photoshop" />
            <img src={process.env.PUBLIC_URL + '/programas/Photoshop.png'} alt='Opción: Photoshop' />
            <span>Photoshop</span>
          </label>

          <label className='filters__programs__item' htmlFor='Animate-option'>
            <input type='checkbox' id="Animate-option" name="Animate" />
            <img src={process.env.PUBLIC_URL + '/programas/Animate.png'} alt='Opción: Animate' />
            <span>Animate</span>
          </label>

          <label className='filters__programs__item' htmlFor='After-option'>
            <input type='checkbox' id="After-option" name="After" />
            <img src={process.env.PUBLIC_URL + '/programas/After.png'} alt='Opción: After Effects' />
            <span>After Effects</span>
          </label>

          <label className='filters__programs__item' htmlFor='Premiere-option'>
            <input type='checkbox' id="Premiere-option" name="Premiere" />
            <img src={process.env.PUBLIC_URL + '/programas/Premiere.png'} alt='Opción: Premiere' />
            <span>Premiere</span>
          </label>

          <label className='filters__programs__item' htmlFor='AdobeXD-option'>
            <input type='checkbox' id="AdobeXD-option" name="AdobeXD" />
            <img src={process.env.PUBLIC_URL + '/programas/XD.png'} alt='Opción: Adobe XD' />
            <span>Adobe XD</span>
          </label>

          <label className='filters__programs__item' htmlFor='Media-option'>
            <input type='checkbox' id="Media-option" name="Media" />
            <img src={process.env.PUBLIC_URL + '/programas/Media.png'} alt='Opción: Media Encoder' />
            <span>Media Encoder</span>
          </label>

          <label className='filters__programs__item' htmlFor='Lightroom-option'>
            <input type='checkbox' id="Lightroom-option" name="Lightroom" />
            <img src={process.env.PUBLIC_URL + '/programas/Lightroom.png'} alt='Opción: Lightroom' />
            <span>Lightroom</span>
          </label>
        </form>
      </div>

      <div className='filters__almacenamiento'>
        <h2 className='subtitle'>Almacenamiento</h2>
        <form>
          <label className='filters__almacenamiento__item' htmlFor='25gb-option'>
            <input type='checkbox' id="25gb-option" name="25gb" />
            <span>0-25 GB</span>
          </label>

          <label className='filters__almacenamiento__item' htmlFor='50gb-option'>
            <input type='checkbox' id="50gb-option" name="50gb" />
            <span>50GB</span>
          </label>

          <label className='filters__almacenamiento__item' htmlFor='i9-option'>
            <input type='checkbox' id="i9-option" name="i9" />
            <span>i9</span>
          </label>
        </form>
      </div>

      <label className='filters__nucleos filter_label' htmlFor='nucleosFilter'>
        <div className='filters__nucleos__header' onClick={() => setShowNucleos(!showNucleos)}>
          <h2 className='subtitle'>Cantidad de Núcleos</h2>
          <div style={showNucleos ? { transform: 'rotate(270deg)' } : {}}><Arrow /></div>
        </div>
        {showNucleos && <>
          <input type='range' min='4' max='64' id='nucleosFilter' className='slider' />
          <div className='filters__nucleos__hour'>
            <p>4</p>
            <p>64</p>
          </div>
        </>}
      </label>

      <label className='filters__procesador filter_label' htmlFor='procesadorFilter'>
        <div className='filters__procesador__header' onClick={() => setShowProcesador(!showProcesador)}>
          <h2 className='subtitle'>Velocidad Procesador</h2>
          <div style={showProcesador ? { transform: 'rotate(270deg)' } : {}}><Arrow /></div>
        </div>
        {showProcesador && <>
          <input type='range' min='1' max='5' id='procesadorFilter' className='slider' />
          <div className='filters__procesador__hour'>
            <p>1GHz</p>
            <p>5GHz</p>
          </div>
        </>}
      </label>

      <div className='filters__advance'>
        <div className='filters__advance__header' onClick={() => setShowAdvance(!showAdvance)}>
          <h2 className='subtitle'>Opciones Avanzadas</h2>
          <div style={showAdvance ? { transform: 'rotate(270deg)' } : {}}><Arrow /></div>
        </div>

        {showAdvance &&
          <>
            <div className='filters__RAM'>
              <h2 className='subtitle'>RAM</h2>
              <form>
                <label className='filters__RAM__item' htmlFor='8gb-option'>
                  <input type='checkbox' id="8gb-option" name="8gb" />
                  <span>8 GB</span>
                </label>

                <label className='filters__RAM__item' htmlFor='12gb-option'>
                  <input type='checkbox' id="12gb-option" name="12gb" />
                  <span>12GB</span>
                </label>

                <label className='filters__RAM__item' htmlFor='16gb-option'>
                  <input type='checkbox' id="16gb-option" name="16gb" />
                  <span>16GB</span>
                </label>

                <label className='filters__RAM__item' htmlFor='24gb-option'>
                  <input type='checkbox' id="24gb-option" name="24gb" />
                  <span>24GB</span>
                </label>

                <label className='filters__RAM__item' htmlFor='32gb-option'>
                  <input type='checkbox' id="32gb-option" name="32gb" />
                  <span>32GB</span>
                </label>
              </form>
            </div>

            <div className='filters__video'>
              <h2 className='subtitle'>Tarjeta Gráfica</h2>
              <form>
                <label className='filters__video__item' htmlFor='RX5000-option'>
                  <input type='checkbox' id="RX5000-option" name="RX5000" />
                  <span>RX 5000</span>
                </label>

                <label className='filters__video__item' htmlFor='GTX1050-option'>
                  <input type='checkbox' id="GTX1050-option" name="GTX1050" />
                  <span>GTX 1050</span>
                </label>

                <label className='filters__video__item' htmlFor='GTX1060-option'>
                  <input type='checkbox' id="GTX1060-option" name="GTX1060" />
                  <span>GTX 1060</span>
                </label>

                <label className='filters__video__item' htmlFor='RTX2060-option'>
                  <input type='checkbox' id="RTX2060-option" name="RTX2060" />
                  <span>RTX 2060</span>
                </label>

                <label className='filters__video__item' htmlFor='RTX2080-option'>
                  <input type='checkbox' id="RTX2080-option" name="RTX2080" />
                  <span>RTX 2080</span>
                </label>

                <label className='filters__video__item' htmlFor='DEFAULT-option'>
                  <input type='checkbox' id="DEFAULT-option" name="DEFAULT" />
                  <span>SIN TARJETA</span>
                </label>
              </form>
            </div>
          </>
        }
      </div>

    </aside>
  )
}

export default Filters;