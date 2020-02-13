import React from 'react';
import ListItem from './ListItem';
import './List.css';

// stateless stuff with props, in props is textFieldFIlter and list to sort from
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const getAllArticles = gql`
	{
		articles {
			title
			description
			coverImageUrl
			author {
				name
				country
			}
		}
	}
`;

export default class List extends React.Component {
	state = {
		textFieldfilter: ''
	};

	onTextFieldfilterChange = (e) => {
		const textFieldfilter = e.target.value;
		this.setState(() => ({ textFieldfilter: textFieldfilter }));
		console.log(this.state.textFieldfilter);
		// send this up to App.js and change state there for filter
	};

	handleReset = () => {
		this.setState(() => ({ textFieldfilter: '' }));
	};

	render() {
		return (
			<Query query={getAllArticles}>
				{({ loading, error, data }) => {
					if (loading) return <p>Relax, it's worth the wait...</p>;
					if (error) return <p>Looks like we've got a problem...</p>;
					return (
						<div>
							<input
								type="text"
								autoFocus
								value={this.state.textFieldfilter}
								onChange={this.onTextFieldfilterChange}
							/>
							<button onClick={this.handleReset}>Reset</button>

							<div class="grid-container">
								{data.articles
									.filter((article) => {
										const textMatch = article.title
											.toLowerCase()
											.includes(this.state.textFieldfilter.toLowerCase());
										return textMatch;
									})
									.map((article, index) => {
										return (
											<ListItem
												key={index}
												coverImageUrl={article.coverImageUrl}
												title={article.title}
												description={article.description}
											/>
										);
									})}
							</div>
						</div>
					);
				}}
			</Query>
		);
	}
}

/** 

.filter((item) => {
						const textMatch = item.toLowerCase().includes(this.state.textFieldfilter.toLowerCase()); // value should be 'name'
						return textMatch;
					})


render() {
		return (
			<div>
				<input
					type="text"
					autoFocus
					value={this.state.textFieldfilter}
					onChange={this.onTextFieldfilterChange}
				/>
				{data.articles
					.filter((article) => {
						const textMatch = article.toLowerCase().includes(this.state.textFieldfilter.toLowerCase()); // value should be 'name'
						return textMatch;
					})
					.map((article) => {
						return <ListItem key={article} coverImageUrl={article.coverImageUrl} title={article.title} description={article.description}/>;
					})}
			</div>
		);
	}


<h1>Articles</h1>
							<div>
								{data.articles.map((article) => (
									<div>
										<div className="card" style={{ width: '18rem' }}>
											<img
												src={article.coverImageUrl}
												className="card-img-top"
												style={{ height: '10em' }}
												alt="cover"
											/>
											<div>
												<h5>{article.title}</h5>
												<p>{article.description}</p>
											</div>
										</div>
									</div>
								))}
							</div>




const List = () => (
    <Query
      query={getAllArticles}>
      {({ loading, error, data }) => {
        if (loading) return <p>Good things take time....</p>
        if (error) return <p>Something went wrong...</p>

        const itemsList = data;
        
        
      }}
    </Query>
  )

*/
