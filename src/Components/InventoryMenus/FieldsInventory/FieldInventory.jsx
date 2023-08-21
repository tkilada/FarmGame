import React from 'react'
import { useSelector } from 'react-redux'
import { SelectFieldRoomEdit } from '../../../StoreFolder/Reducers/storeRoomState'
import './FieldInventoryStyle.css'

function FieldInventory() {

  const fieldRoom= useSelector(SelectFieldRoomEdit)
  const fieldInventory = fieldRoom.inventory
  
  const ryeSeeds = fieldInventory.ryeSeeds
  const barleySeeds = fieldInventory.barleySeeds

  const ryeSeedlings = ryeSeeds.filter((ryeSeed) => ryeSeed.harvestStatus === 'seedling')
  const ryeGrowing = ryeSeeds.filter((ryeSeed) => ryeSeed.harvestStatus === 'growth')

  const barleySeedlings = barleySeeds.filter((barleySeed) => barleySeed.harvestStatus === 'seedling')
  const barleyGrowing = (barleySeeds.filter((barleySeed) => barleySeed.harvestStatus === 'growth'))

  const barleyGrain = barleySeeds.filter((barleySeed) => barleySeed.harvestStatus === 'collect')
  const ryeGrain = ryeSeeds.filter((ryeSeed) => ryeSeed.harvestStatus === 'collect')

  const StoredGrain = barleyGrain.length + ryeGrain.length


  return (
    <div className='FieldInventoryBox'>
      <div className='RyeSeeds CropBox'>
        <h2 className='CropText'>Rye:</h2>
        <div className='RyeSeedlings CropText'>
          <h4>Seedlings</h4>
          <a>{ryeSeedlings.length}</a>
        </div>
        <div className='RyeGrowing CropText'>
          <h4>Growing</h4>
          <a>{ryeGrowing.length}</a>
        </div>
      </div>
      <div className='BarleySeeds CropBox'>
        <h2 className='CropText'>Barley:</h2>
        <div className='BarleySeedlings CropText'>
          <h4>Seedlings</h4>
          <a>{barleySeedlings.length}</a>
        </div>
        <div className='BarleyGrowing CropText'>
          <h4>Growing</h4>
          <a>{barleyGrowing.length}</a>
        </div>
      </div>
      <div className='StoredGrain CropText CropBox'>
        <h2>Grain:</h2>
        <a>{StoredGrain}</a>
      </div>
    </div>
  )
}

export default FieldInventory