import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';

import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const UserProfile = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user, repos, getUserRepos } = githubContext;
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
      Voltar para pesquisar
      </Link>
     
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img src={avatar_url} alt='' style={{ width: '150px' }} />
          <h1>{name}</h1>
          <p>Localização: {location}</p>
        </div>

        <div>
          {bio && (
            <Fragment>
              <h3>Biografia</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} target='_blank' className='btn btn-dark my-1'>
          Visite o perfil do Github
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Nome do usuário: </strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {login && (
                <Fragment>
                  <strong>Companhia: </strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {login && (
                <Fragment>
                  <strong>Website: </strong>
                  {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'> Seguidoras: {followers}</div>
        <div className='badge badge-success'> Segue: {following}</div>
        <div className='badge badge-light'> Repos Públicos: {public_repos}</div>
        <div className='badge badge-dark'> Síntese pública: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default UserProfile;