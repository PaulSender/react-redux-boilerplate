import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getItems } from '../actions/itemActions'
import PropTypes from 'prop-types'

function Home(props) {
    console.log(props);
    useEffect(() => {
        props.getItems()
    }, [])
    return (
        <div>
            <h3>Home</h3>
        </div>
    )
}

Home.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    item: state.item
})
export default connect(mapStateToProps, { getItems })(Home)