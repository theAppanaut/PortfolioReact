var React = require('react');
var Modal = require('react-modal');
var DefaultLayout = require('./layout');

var AboutComponent = React.createClass({

  openModal: function() {
    this.setState({className: is-active});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  render: function() {
    return (
      <DefaultLayout name={this.props.name}>

        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child notification beige hundred">
              <div>
                <h3 className="title is-2">Melissa</h3>
                <img className="about-photo" src="/img/melissaprofile.jpg"></img>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification beige hundred">
              <div>
                <h3 className="title is-2">Madison</h3>
                <img className="about-photo" src="/img/madisonprofile.jpg"></img>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
              </div>
            </article>
          </div>
        </div>

      </DefaultLayout>
    )
  }
});

module.exports = AboutComponent;
