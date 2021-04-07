import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectGasInfo } from "features/gasTracker/gasTrackerSlice"
import {
  fetchGasTrendAsync,
  selectGasTrend,
} from "features/gasTrend/gasTrendSlice"

export default function IsEthCongested() {
  const dispatch = useDispatch()
  const gasInfo = useSelector(selectGasInfo)
  const gasTrend = useSelector(selectGasTrend)
  useEffect(() => {
    dispatch(fetchGasTrendAsync(7))
  }, [])
  return <div>test</div>
}
